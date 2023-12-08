
interface Props{
    modelData:{name:string,color:string,price:number,size:string}
}

const ShopCartContent:React.FC<Props>=({modelData})=>{
    
    const {name,color,price,size}=modelData
    
    return(
        <div>
         <h2>Name:{name}</h2>
         <p>Color:{color}</p>
         <p>Price:{price}</p>
         <p>Size:{size}</p>
        </div>
    )
}

export default ShopCartContent;