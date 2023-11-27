import { createSlice } from "@reduxjs/toolkit";
import { ObjectType } from "shared/helpers/helpers";

interface stateProps {
  dataInfo: {};
}

const initialState: stateProps = {
  dataInfo: {
    top:{front:{},back:{}},
    bottom:{front:{},back:{}},
    sleeve:{},
    size:"",
    customSize:{}
  },
};

export const addToCartReducer = createSlice({
  name: "addToCartReducer",
  initialState,
  reducers: {
    setDataInfo: (state, action) => {
      console.log(action.payload);
      
        state.dataInfo = action.payload;
    },
}});

export const { setDataInfo } = addToCartReducer.actions;

export const getDataProductInfo = (state: ObjectType) => state.addToCartReducer.dataInfo;

export default addToCartReducer.reducer;
