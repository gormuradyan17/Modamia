import CustomizationLoader from 'components/Customization/customizationLoader/CustomizationLoader';
import { useEffect, useRef, useState } from 'react'
import { canvasModelInit } from 'shared/helpers/canvasHelpers';
import { ObjectType } from 'shared/helpers/helpers';
interface Props {
  data: ObjectType
}

const GarmentsMannequin = ({ data }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const drawManequin = async () => {
    await canvasModelInit(0.3, data.modelData, 'fronts', canvasRef, data.activeMannequin, data.modelData, true, false,2.5)
    await setIsLoaded(true)
  }

  useEffect(() => {
    if (data) {
      drawManequin()
    }
  }, [data, canvasRef])

  useEffect(() => {
    return () => {
      canvasRef.current = null
    }
  },[])

  return (
    <div className="customization-mannequin">
      {!isLoaded && <CustomizationLoader />}
      <canvas {...(!isLoaded && {style: {
        opacity: 0,
        visibility: 'hidden'
      }})} ref={canvasRef}></canvas>
    </div>
  )
}

export default GarmentsMannequin
