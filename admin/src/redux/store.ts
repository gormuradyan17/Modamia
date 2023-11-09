import { configureStore } from '@reduxjs/toolkit'
import asideReducer from "./reducers/asideReducer";
import colorReducer from "./reducers/colorReducer";

export const store = configureStore({
  reducer: {
    asideReducer,
    colorReducer
  },
})