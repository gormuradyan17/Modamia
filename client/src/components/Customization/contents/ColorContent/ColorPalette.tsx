import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorsVariants } from "redux/reducers/colorReducer";
import { getAvColors, getAvColorsVariants } from "services/colorService";
import DropdownUI from "shared/ui/DropdownUI";

const ColorPalette = () => {
  const cVariants = useSelector(colorsVariants);
  const dispatch = useDispatch();
  const {name,_id}=cVariants.find((item:any)=>item.name==="Parisian You")
  const [choosenOptName, setChoosenOptName] = useState(name);
  const [choosenOptId, setChoosenOptId] = useState(_id);

  useEffect(() => {
    getAvColors(dispatch, choosenOptId);
  }, [choosenOptId]);
  const handleDropdownChange = (e: any) => {
    setChoosenOptId(e._id);
    setChoosenOptName(e.name);
  };
  return (
    <div>
      <DropdownUI
        options={cVariants}
        onChange={(e) => handleDropdownChange(e)}
        defaultValue={choosenOptName}
        classN=""
      />
    </div>
  );
};

export default ColorPalette;
