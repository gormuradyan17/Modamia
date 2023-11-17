import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import TopSilhouettesList from "./tops/TopSilhouettesList";
import BottomSilhouettesList from "./bottoms/BottomSilhouettesList";
import SleeveSilhouettesList from "./sleeves/SleeveSilhouettesList";

const SilhouettesList = () => {

    return (
        <div className="silhouettes-list">
            <HeadingUI text="Silhouettes List" size="22px" />
            <div className="silhouettes-list-content">
               <TopSilhouettesList />
               <BottomSilhouettesList />
               <SleeveSilhouettesList />
            </div>
        </div>
    );
};

export default SilhouettesList;