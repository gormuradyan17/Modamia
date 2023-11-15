import { ObjectType } from "shared/helpers/helpers";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import './style.scss'

interface Props {
  infoData: ObjectType;
}

const CustomizationInfo = ({ infoData }: Props) => {
  return (
    <div className="customization-info">
      <HeadingUI classN="customization-info-name" text={infoData.name} size="22px" color="#a57867" />
      <HeadingUI text={`AMD ${infoData.price}`} size="18px" color="#c37489" />
    </div>
  );
};

export default CustomizationInfo;
