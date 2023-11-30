import {useState} from "react"
import HeadingUI from "shared/ui/HeadingUI/HeadingUI"
import CustomSize from "./CustomSize"
import SizeFromBackend from "./SizeFromBackend"
import "./style.scss"
import OptionalInsigts from "../OptionalInsigts"

const ChangeSize=()=>{
    const [showCustomSize,setShowCustomSize]=useState<boolean>(false)
return(
    <div>
    <HeadingUI text="Create Custom size:" classN="option_title" handleEvent={()=>setShowCustomSize(!showCustomSize)}/>
    {showCustomSize && <CustomSize/>}
    {showCustomSize && <OptionalInsigts/>}
    {!showCustomSize && <SizeFromBackend/> }
    </div>
)
}


export default ChangeSize