import CaptionContent from "./CaptionContent"
import ComplementColor from "./ComplementColor";
import FeaturedCollections from "./FeaturedCollections";
import Handcrafted from "./Handcrafted";
import HandmadeContent from "./Handmade";
import ModamiaPromise from "./ModamiaPromise";
import Wardrobe from "./Wardrobe";
import "./style.scss"


const DashboardContent = () => {
    
    return (
        <section>
            <CaptionContent />
            <FeaturedCollections />
            <HandmadeContent />
            <Wardrobe />
            <ComplementColor />
            <ModamiaPromise />
            <Handcrafted />
        </section>
    )
}


export default DashboardContent;