import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";




const Wardrobe = () => {
    return (
        <section className="wardrobe_container">
            <img src="image/warderobe.webp" alt="" />
            <div className="wardrobe_text_content">
                <p className="wardrobe_essentials">Wardrobe Essentials</p>
                <HeadingUI text="CURATED FOR YOU" />
                <p>
                    Designed to flatter your body shape<br />
                    Endlessly versatile<br />
                    Timeless designs
                </p>
                <div className="btn_content">
                <ButtonUI>
                    Shop Styles for Your Body Type
                </ButtonUI>
                <ButtonUI>
                    Explore Our Essentials Collection
                </ButtonUI>
                </div>
            </div>
        </section>
    )
}


export default Wardrobe;