import { useSelector } from "react-redux"
import "./style.scss"
import { getProduct } from "redux/reducers/addToCartReducer"
import useSnackbar from "utils/hooks/useSnackbar"
import { Variant } from "shared/ui/SnackbarUI/container/SnackbarContainer"

const AddToCart = () => {
  const productData = useSelector(getProduct)
  const { appendSnackbar } = useSnackbar()
  const addToLocalStorage = async () => {
    const data = localStorage.hasOwnProperty("basket") ? JSON.parse(localStorage.getItem("basket") || '[]') : []
    const copyData = structuredClone(productData);
    copyData.id = new Date().getTime()
    data.push(copyData)
    localStorage.setItem("basket", JSON.stringify(data))
    await appendSnackbar(Variant.success, {
      autoHideDuration: 3000,
      message: 'Product successfully added to basket!!'
    })
  }
  return (
    <button className="add_to_cart" onClick={addToLocalStorage}>Add to Cart</button>
  )
}

export default AddToCart