import { useEffect, useRef } from 'react'
import { canvasModelInit } from 'shared/helpers/canvasHelpers';
import { ObjectType } from 'shared/helpers/helpers';
interface Props {
    data: ObjectType
}

const GarmentsMannequin = ({data}: Props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if(data){
            canvasModelInit(.3, data.modelData, 'fronts', canvasRef, data.activeMannequin, data.modelData, true)
        }
    }, [data, canvasRef])
  return (
    <div className="product_canvas-image">
    <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default GarmentsMannequin
