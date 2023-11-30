import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI"
import HeadingUI from "shared/ui/HeadingUI/HeadingUI"





const FeaturedCollections=()=>{
    return(
        <section className="featured_content">
            <div className="featured_description">
                <HeadingUI text="CUSTOM SIZE FOR EVERY BODY"/>
                <p>Simple Sizing
                    <br/>      
                 Tailored Fit, Just for You   <br/>   
                 100% Fit Promise
                </p>
                <ButtonUI> Create Your Fit</ButtonUI>
            </div>
            <div className="featured_img">
             <img src="image/featured_collections.webp" alt=""/>
            </div>
        </section>
    )
}

export default FeaturedCollections;