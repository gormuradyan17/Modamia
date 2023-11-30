import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI"




const HandmadeContent = () => {
    const data = [
        {
            id: 1,
            text: "Designed For Your Body",
            image: "image/left_side_image.jpg"
        },
        {
            id: 2,
            text: "Your Personalized Colors",
            image: "image/right_1.webp"
        }, {
            id: 3,
            text: "Embody Your Uniqueness",
            image: "image/right_2.webp"
        }
    ]
    return (
        <section className="handmade_container">
            <p className="handmade_title">HANDMADE JUST FOR YOU</p>
            <div className="handmade_content">
                {data.map(i => (
                    <div key={i.id} className={`block_${i.id}`}>
                        <img src={i.image} alt="" />
                        <p className="handmade_link">{i.text}
                            <FontAwesomeIcon icon={faArrowRight} /></p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HandmadeContent;