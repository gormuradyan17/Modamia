import {forwardRef,useEffect} from "react"

const CanvasManeuqin=forwardRef(function CanvasManeuqin(props:any, ref:any) {
    useEffect(() => {
        // Your canvas-related logic here, using the forwarded ref
        // console.log('CanvasManeuqin ref:', ref);
      }, [ref]);
    return(
        <div className="canvas-body">
        <canvas className="canvas" id="canvas" ref={ref}></canvas>
      </div>
    )
  })

  export default CanvasManeuqin