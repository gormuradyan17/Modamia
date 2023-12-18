import { configureStore } from '@reduxjs/toolkit'
import asideReducer from "./reducers/asideReducer";
import colorReducer from "./reducers/colorReducer";
import printReducer from "./reducers/printReducer";
import mannequinReducer from "./reducers/mannequinReducer";
import silhouetteReducer from './reducers/silhouetteReducer';
import sizeReducer from "./reducers/sizeReducer"
import addToCartReducer from "./reducers/addToCartReducer"
import garmentReducer from "./reducers/garmentReducer"
import modelDataReducer from "./reducers/modelData"
import userReducer from "./reducers/userReducer"
export const store = configureStore({
  reducer: {
    asideReducer,
    colorReducer,
    printReducer,
    mannequinReducer,
    silhouetteReducer,
    sizeReducer,
    addToCartReducer,
    garmentReducer,
    modelDataReducer,
    userReducer
  },
})