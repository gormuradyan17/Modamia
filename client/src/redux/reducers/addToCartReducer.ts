import { createSlice } from "@reduxjs/toolkit";
import { ObjectType } from "shared/helpers/helpers";

interface stateProps {
  dataInfo: {
    name: string,
    price: number,
    size: string,
    customSize: {},
    modelData:ObjectType,
    activeMannequin:ObjectType
  };
}

const initialState: stateProps = {
  dataInfo: {
    name: "the juliette dress",
    price: 0,
    modelData:{
    fronts: [],
    backs: [],
    sleeves: [],
    },
    size: "S",
    customSize: {},
    activeMannequin:{}
  },
};
export const addToCartReducer = createSlice({
  name: "addToCartReducer",
  initialState,
  reducers: {
    setProductName: (state, action) => {
      state.dataInfo.name = action.payload;
    },
    setProductPrice: (state, action) => {
      state.dataInfo.price = action.payload;
    },
    setProductSize: (state, action) => {
      state.dataInfo.size = action.payload;
    },
    setProductFront: (state, action) => {
      state.dataInfo.modelData.fronts = action.payload
    },
    setProductBack: (state, action) => {
      state.dataInfo.modelData.backs = action.payload
    },
    setProductSleeve: (state, action) => {
      state.dataInfo.modelData.sleeves = action.payload
    },
    setProductCustomSize: (state, action) => {
      state.dataInfo.customSize = action.payload;
    },
    setActiveMannequinProduct:(state,action)=>{    
      state.dataInfo.activeMannequin=action.payload

    }
  }
});

export const { setProductName, setProductPrice, setProductSize, setActiveMannequinProduct, setProductFront, setProductBack, setProductSleeve, setProductCustomSize } = addToCartReducer.actions;

export const getProduct = (state: ObjectType) => state.addToCartReducer.dataInfo;
export const getProductName = (state: ObjectType) => state.addToCartReducer.dataInfo.name;
export const getProductPrice = (state: ObjectType) => state.addToCartReducer.dataInfo.price;
export const getProductSize = (state: ObjectType) => state.addToCartReducer.dataInfo.size;
export const getProductFront = (state: ObjectType) => state.addToCartReducer.dataInfo.front;
export const getProductBack = (state: ObjectType) => state.addToCartReducer.dataInfo.back;
export const getProductSleeve = (state: ObjectType) => state.addToCartReducer.dataInfo.sleeve;
export const getProductCustomSize = (state: ObjectType) => state.addToCartReducer.dataInfo.customSize;
export const getActiveMannequin = (state: ObjectType) => state.addToCartReducer.dataInfo.activeMannequin;

export default addToCartReducer.reducer;
