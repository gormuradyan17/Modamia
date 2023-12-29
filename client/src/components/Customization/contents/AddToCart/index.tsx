import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { getProduct, setProductFront } from "redux/reducers/addToCartReducer";
import useSnackbar from "utils/hooks/useSnackbar";
import { Variant } from "shared/ui/SnackbarUI/container/SnackbarContainer";
import {
  getMannequinActiveCategory,
  setActiveColor,
  setActivePrint
} from "redux/reducers/mannequinReducer";

const AddToCart = () => {
  const activeCategory = useSelector(getMannequinActiveCategory);
  const dispatch = useDispatch();
  const { appendSnackbar } = useSnackbar();
  const productData = useSelector(getProduct);

  const clearModelData = (activeCategory: any) => {
    const copyData = structuredClone(productData)
    const frontUpdate = copyData.modelData.fronts.map((front: any) => ({ ...front, [activeCategory]: "" }));
    dispatch(setProductFront(frontUpdate));
    return copyData
  };

  const addToLocalStorage = async () => {
    let newData = []
    if (activeCategory === "print") {
      dispatch(setActiveColor(""));
      newData = clearModelData("color");
    } else if (activeCategory === "color") {
      dispatch(setActivePrint({ highresurl: "", previewurl: "" }));
      newData = clearModelData("printImageURL");
    }

    const data = localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket") || "[]") : [];

    data.push(newData);
    localStorage.setItem("basket", JSON.stringify(data));

    await appendSnackbar(Variant.success, {
      autoHideDuration: 3000,
      message: "Product successfully added to the basket!!"
    });
  };

  return <button className="add_to_cart" onClick={addToLocalStorage}>Add to Cart</button>;
};

export default AddToCart;
