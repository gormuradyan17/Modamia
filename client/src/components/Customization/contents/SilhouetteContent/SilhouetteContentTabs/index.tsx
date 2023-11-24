import { NoSleeveObject } from "shared/helpers/helpers";
import SilhouetteClothes from "../SilhouetteClothes";
interface Props{
    silhouettesData:[],
    kindSilhouette:string
}
    
const SilhouetteContentTabs:React.FC<Props>=({silhouettesData,kindSilhouette})=>{
   const topData=silhouettesData && silhouettesData.length && silhouettesData.filter((silhouettes:any)=>silhouettes.type==="Top" && silhouettes.type )
   const bottomData=silhouettesData && silhouettesData.length && silhouettesData.filter((silhouettes:any)=>silhouettes.type==="Bottom" && silhouettes.type )
   const sleeveData=silhouettesData && silhouettesData.length && [
        ...silhouettesData.filter((silhouettes:any)=>silhouettes.type==="Sleeve" && silhouettes.type ),
        NoSleeveObject
    ]
   
   
   return(
    <div className="silhouette-content">
         <SilhouetteClothes data={topData} type="tops" />
         <SilhouetteClothes data={bottomData} type="bottoms"/>
         {kindSilhouette && <SilhouetteClothes data={sleeveData} type="sleeves" />
}
    </div>
   )
}

export default SilhouetteContentTabs;