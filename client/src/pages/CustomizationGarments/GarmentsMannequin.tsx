import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomizationLoader from 'components/Customization/customizationLoader/CustomizationLoader';
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { removeCart } from 'services/userService';
import { canvasModelInit } from 'shared/helpers/canvasHelpers';
import { ObjectType } from 'shared/helpers/helpers';
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
interface Props {
  data: ObjectType
}

const GarmentsMannequin = ({ data }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const navigate = useNavigate()

  const drawManequin = async () => {
    await canvasModelInit(0.3, data.modelData, 'fronts', canvasRef, data.activeMannequin, data.modelData, true, false,2.5)
    await setIsLoaded(true)
  }

  useEffect(() => {
    console.log(data,"data");
    
    if (data) drawManequin()
  }, [data, canvasRef])

  useEffect(() => {
    return () => {
      canvasRef.current = null
    }
  },[])

  const removeMyGarment = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    await removeCart({ cart_id: data?.id })
    navigate('/home')
  }

  return (
    <div className="customization-mannequin">
      {!isLoaded && <CustomizationLoader />}
      <canvas {...(!isLoaded && {style: {
        opacity: 0,
        visibility: 'hidden'
      }})} ref={canvasRef}></canvas>
      <ButtonUI classN="remove-my-garment" onClick={removeMyGarment}><FontAwesomeIcon icon={faTrash} /></ButtonUI>
    </div>
  )
}

export default GarmentsMannequin
