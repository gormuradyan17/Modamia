import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI"
import HeadingUI from "shared/ui/HeadingUI/HeadingUI"


const CaptionContent=()=>{
    return(
        <section className="image_wrapper">
            <img src="image/dashboard.webp" alt="" />
        <div className="caption_content">
             <HeadingUI text="MADE -TO-MEASURE FASHION Crafted To Celebrate You"/>
             <p>Your Design <br/>Your Size <br/>Handmade For You</p>
             <ButtonUI> BEGIN YOUR STYLE JOURNEY</ButtonUI>
        </div>
        </section>
    )
}


export default CaptionContent