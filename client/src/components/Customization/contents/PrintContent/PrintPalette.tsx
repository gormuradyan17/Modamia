import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { printsVariants } from "redux/reducers/printReducer";
import { getAvPrints } from "services/printService";
import DropdownUI from "shared/ui/DropdownUI";

const PrintPalette = () => {
  const pVariants = useSelector(printsVariants);
  const dispatch = useDispatch();
  const {name,_id}=pVariants.find((item:any)=>item.name==="Parisian You")
  const [choosenOptName, setChoosenOptName] = useState(name);
  const [choosenOptId, setChoosenOptId] = useState(_id);

  const handleDropdownChange = (e: any) => {
    setChoosenOptId(e._id);
    setChoosenOptName(e.name);
  };

  useEffect(()=>{
    getAvPrints(dispatch,choosenOptId)
  },[choosenOptId])
  return (
    <div>
      <DropdownUI
        options={pVariants}
        onChange={(e) => handleDropdownChange(e)}
        defaultValue={choosenOptName}
        classN=""
      />
    </div>
  );
};
export default PrintPalette;
