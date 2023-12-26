import { createSlice } from "@reduxjs/toolkit";
import { ObjectType } from "shared/helpers/helpers";

interface stateProps {
  dataInfo: {
    name: string,
    price: number,
    size: string,
    customSize: {},
    garment_id: string,
    modelData: ObjectType,
    activeMannequin: ObjectType,
    count:number
  };
}

const initialState: stateProps = {
  dataInfo: {
    name: "",
    price: 0,
    garment_id: '',
    modelData: {
      fronts: [],
      backs: [],
      sleeves: [],
    },
    size: "",
    customSize: {},
    activeMannequin: {},
    count:1
  },
};
export const addToCartReducer = createSlice({
  name: "addToCartReducer",
  initialState,
  reducers: {
    setProductGarment: (state, action) => {
      state.dataInfo.garment_id = action.payload;
    },
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
    setActiveMannequinProduct: (state, action) => {
      state.dataInfo.activeMannequin = action.payload
    },
    setProductFullState: (state, action) => {
      state.dataInfo = action.payload;
    },
    setProductCount: (state, action) => {
      state.dataInfo.count = action.payload;
    }
  }
});

export const { setProductFullState,setProductCount, setProductGarment, setProductName, setProductPrice, setProductSize, setActiveMannequinProduct, setProductFront, setProductBack, setProductSleeve, setProductCustomSize } = addToCartReducer.actions;

export const getProduct = (state: ObjectType) => state.addToCartReducer.dataInfo;
export const getProductName = (state: ObjectType) => state.addToCartReducer.dataInfo.name;
export const getProductPrice = (state: ObjectType) => state.addToCartReducer.dataInfo.price;
export const getProductSize = (state: ObjectType) => state.addToCartReducer.dataInfo.size;
export const getProductFront = (state: ObjectType) => state.addToCartReducer.dataInfo.front;
export const getProductBack = (state: ObjectType) => state.addToCartReducer.dataInfo.back;
export const getProductSleeve = (state: ObjectType) => state.addToCartReducer.dataInfo.sleeve;
export const getProductCustomSize = (state: ObjectType) => state.addToCartReducer.dataInfo.customSize;
export const getActiveMannequin = (state: ObjectType) => state.addToCartReducer.dataInfo.activeMannequin;
export const getProductCount = (state: ObjectType) => state.addToCartReducer.dataInfo.count;

export default addToCartReducer.reducer;
