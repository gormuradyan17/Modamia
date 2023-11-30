import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductSize } from "redux/reducers/addToCartReducer";
import { availableSizes } from "redux/reducers/sizeReducer";
import { getAvSizes } from "services/sizeService";
import {
  ObjectType,
  getConvertedDropdownOptionsFromVariants,
} from "shared/helpers/helpers";
import DropdownUI from "shared/ui/DropdownUI";

const SizeFromBackend = () => {
  const sizes = useSelector(availableSizes);
  const [dataSize, setDataSize] = useState("");
  const dispatch = useDispatch();
  const options = getConvertedDropdownOptionsFromVariants(sizes);

  useEffect(() => {
    getAvSizes(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sizes.length) {
      setDataSize(sizes[0]?.size);
    }
  }, [sizes]);

  const handleDropdownChange = (e: any) => {   
    dispatch(setProductSize(e.value))
    setDataSize(e.size);
  };

  return (
    <div>
      {Boolean(sizes.length) && (
        <DropdownUI
          options={options}
          onChange={handleDropdownChange}
          defaultValue={dataSize}
        />
      )}
    </div>
  );
};

export default SizeFromBackend;
