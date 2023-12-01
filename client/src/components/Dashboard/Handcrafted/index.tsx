import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI"



const Handcrafted = () => {
    return (
        <section>
            <div className="handlecrafted_container">
                <img src="image/handcrafted.webp" alt="" />
                <div className="handlecrafted_content">
                    <p className="title">HANDCRAFTED WITH <br/>ARTISANAL  <br/>CRAFTSMANSHIP</p>
                    <p>High-Quality Fabrics <br />
                        Sustainable Process  <br />
                        Accuracy That Can Only Be Performed By Hand</p>
                    <ButtonUI>Discover Our Craft</ButtonUI>
                </div>
            </div>
        </section>
    )
}

export default Handcrafted;