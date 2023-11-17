import { configureStore } from '@reduxjs/toolkit'
import asideReducer from "./reducers/asideReducer";
import colorReducer from "./reducers/colorReducer";
import printReducer from "./reducers/printReducer";
import mannequinReducer from "./reducers/mannequinReducer";
import silhouetteReducer from "./reducers/silhouetteReducer";


export const store = configureStore({
  reducer: {
    asideReducer,
    colorReducer,
    printReducer,
    mannequinReducer,
    silhouetteReducer
  },
})