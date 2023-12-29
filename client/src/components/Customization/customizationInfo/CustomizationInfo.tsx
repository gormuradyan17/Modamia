import { ObjectType } from "shared/helpers/helpers";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import './style.scss'
import CounterUI from "shared/ui/CounterUI/CounterUI";
import { useDispatch, useSelector } from "react-redux";
import { getProductCount, getProductName, getProductPrice, setProductCount } from "redux/reducers/addToCartReducer";

const CustomizationInfo = () => {

  const dispatch = useDispatch()

  const count = useSelector(getProductCount)
  const price = useSelector(getProductPrice)
  const name = useSelector(getProductName)
  const total = price * count;

  const setQuantity = (count: number) => {
    dispatch(setProductCount(count))
  }

  return (
    <div className="customization-info">
      <HeadingUI classN="customization-info-name" text={name} size="22px" color="#a57867" />
      <div className="customization-info-detais">
        <HeadingUI text={`$ ${total}`} size="18px" color="#c37489" />
        <CounterUI selected={count || 1} onCountChange={(count: number) => setQuantity(count)} />
      </div>
      {/* <HeadingUI text={`Count ${infoData.count}`} size="18px" color="#a57867" /> */}
    </div>
  );
};

export default CustomizationInfo;
