import { useSelector } from "react-redux"
import "./style.scss"
import { getProduct } from "redux/reducers/addToCartReducer"

const AddToCart=()=>{
  const productData=useSelector(getProduct)
  
  const addToLocalStorage=()=>{
    const data=localStorage.hasOwnProperty("basket") ? JSON.parse(localStorage.getItem("basket") || '[]') : []
    data.push(productData)
    localStorage.setItem("basket",JSON.stringify(data))
  }
    return(
        <div>
        <button className="add_to_cart" onClick={addToLocalStorage}>Add to Cart</button>
        </div>
    )
}

export default AddToCart