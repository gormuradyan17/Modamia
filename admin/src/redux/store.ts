import { configureStore } from '@reduxjs/toolkit'
import asideReducer from "./reducers/asideReducer";
import colorReducer from "./reducers/colorReducer";
import printReducer from "./reducers/printReducer";
import mannequinReducer from "./reducers/mannequinReducer";
import silhouetteReducer from "./reducers/silhouetteReducer";
import sizeReducer from "./reducers/sizeReducer";
import authReducer from "./reducers/authReducer";
import garmentReducer from "./reducers/garmentReducer";

export const store = configureStore({
  reducer: {
    authReducer,
    asideReducer,
    colorReducer,
    printReducer,
    mannequinReducer,
    silhouetteReducer,
    sizeReducer,
    garmentReducer
  },
})