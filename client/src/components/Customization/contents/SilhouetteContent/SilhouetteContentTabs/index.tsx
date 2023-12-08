import { NoSleeveObject, ObjectType } from "shared/helpers/helpers";
import SilhouetteClothes from "../SilhouetteClothes";
interface Props {
    silhouettesData: ObjectType,
    kindSilhouette: string
}

const SilhouetteContentTabs: React.FC<Props> = ({ silhouettesData, kindSilhouette }) => {
    const topData = silhouettesData?.tops
    const bottomData = silhouettesData?.bottoms
    const sleeveData = silhouettesData?.tops    
    return (
        <div className="silhouette-content">
            {kindSilhouette !== "sleeves" && <SilhouetteClothes data={topData} type="tops" />}
            {kindSilhouette !== "sleeves" && <SilhouetteClothes data={bottomData} type="bottoms" />}
            {kindSilhouette === "sleeves" && <SilhouetteClothes data={sleeveData} type="sleeves" />}
        </div>
    )
}

export default SilhouetteContentTabs;