import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ObjectType } from "shared/helpers/helpers";
      
interface Item {
    position?: string;
    src?: string;
    color?: string;
    printImageURL?: string;
    activeCategory?: string;
    price?: number;
    width?: string;
    height?: string;
    order?: number;
    activeImgUrl?:string
  }
  
  interface ModelDataState {
    fronts: Item[];
    backs: Item[];
    sleeves: Item[];
  }
  
  interface UpdateSrcPayload {
    frontBack: keyof ModelDataState;
    i: number;
  }
const initialState: ModelDataState  = {
  fronts: [
    // { position: "bottom", src: "", color: "", printImageURL: "", activeCategory: "", price: 200, width: "", height: "", order: 1 },
    // { position: "top", src: "", color: "", printImageURL: "", activeCategory: "", price: 300, width: "", height: "", order: 2 },
  ],
  backs: [
    // { position: "bottom", src: "", color: "", printImageURL: "", activeCategory: "", price: 0, width: "", height: "", order: 2 },
    // { position: "top", src: "", color: "", printImageURL: "", activeCategory: "", price: 0, width: "", height: "", order: 1 },
  ],
  sleeves: [
    // { position: "top", src: "", color: "", printImageURL: "", activeCategory: "", price: 0, width: "", height: "", order: 3 },
    // { position: "bottom", src: "", color: "", printImageURL: "", activeCategory: "", price: 0, width: "", height: "", order: 0 }
  ]
};

export const modelDataSlice = createSlice({
	name: 'modelDataReducer',
	initialState,
	reducers: {
     setInitialState:(state,action)=>{                  
          return action.payload; 
        },
		setSrcModelData: (state, action:PayloadAction<UpdateSrcPayload&Item>) => {
            const {frontBack,i,activeImgUrl}=action.payload            
            if (state[frontBack] && state[frontBack][i]) {                            
                state[frontBack][i].src = activeImgUrl;
            }
          },
		setColorModelData: (state, action:PayloadAction<UpdateSrcPayload&Item>) => {
            const {frontBack,i,color}=action.payload
            if (state[frontBack] && state[frontBack][i]) {
              state[frontBack][i].color = color;
            }
          },
		setPositionModelData: (state, action:PayloadAction<UpdateSrcPayload&Item>) => {
            const {frontBack,i,position}=action.payload
            if (state[frontBack] && state[frontBack][i]) {
              state[frontBack][i].position = position;
            }
          },
		setPrintImageURLModelData: (state, action:PayloadAction<UpdateSrcPayload&Item>) => {
            const {frontBack,i,printImageURL}=action.payload
            if (state[frontBack] && state[frontBack][i]) {
              state[frontBack][i].printImageURL = printImageURL;
            }
          },
		setActiveCategoryModelData: (state, action:PayloadAction<UpdateSrcPayload&Item>) => {
            const {frontBack,i,activeCategory}=action.payload
            
            if (state[frontBack] && state[frontBack][i]) {
              state[frontBack][i].activeCategory = activeCategory;
            }
          },
		setPriceModelData: (state, action:PayloadAction<UpdateSrcPayload&Item>) => {
            const {frontBack,i,price}=action.payload
            if (state[frontBack] && state[frontBack][i]) {
              state[frontBack][i].price = price;
            }
          },
		setWidthModelData: (state, action:PayloadAction<UpdateSrcPayload&Item>) => {
            const {frontBack,i,width}=action.payload
            if (state[frontBack] && state[frontBack][i]) {
              state[frontBack][i].width = width;
            }
          },
		setHeightModelData: (state, action:PayloadAction<UpdateSrcPayload&Item>) => {
            const {frontBack,i,height}=action.payload
            if (state[frontBack] && state[frontBack][i]) {
              state[frontBack][i].height = height;
            }
          },
		setOrderData: (state, action:PayloadAction<UpdateSrcPayload&Item>) => {
            const {frontBack,i,height}=action.payload
            if (state[frontBack] && state[frontBack][i]) {
              state[frontBack][i].height = height;
            }
          },
		},
	
		
	}
);

export const { 
    setSrcModelData,
    setColorModelData,
    setPositionModelData,
    setPrintImageURLModelData,
    setActiveCategoryModelData,
    setHeightModelData,
    setPriceModelData,
    setWidthModelData,
    setOrderData,
    setInitialState
} = modelDataSlice.actions;

export const availableModelData = (state:ObjectType) => state.modelDataReducer;
// export const sizeDetails = (state: ObjectType) => state.sizeReducer.sizeState;

export default modelDataSlice.reducer;