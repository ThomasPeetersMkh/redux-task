import { configureStore } from "@reduxjs/toolkit";
import colorPicker from "./colorPicker";

const store = configureStore({
  reducer: colorPicker,
});

export default store;
