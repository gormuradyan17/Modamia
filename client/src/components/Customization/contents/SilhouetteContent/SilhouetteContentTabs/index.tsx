import SilhouetteClothes from "../SilhouetteClothes";
interface Props{
    silhouettesData:[]
}

const SilhouetteContentTabs:React.FC<Props>=({silhouettesData})=>{
   const topData=silhouettesData && silhouettesData.length && silhouettesData.filter((silhouettes:any)=>silhouettes.type==="Top" && silhouettes.type )
   const bottomData=silhouettesData && silhouettesData.length && silhouettesData.filter((silhouettes:any)=>silhouettes.type==="Bottom" && silhouettes.type )
   
   return(
    <>
         <SilhouetteClothes data={topData} type="tops" />
         <SilhouetteClothes data={bottomData} type="bottoms"/>
    </>
   )
}

export default SilhouetteContentTabs;