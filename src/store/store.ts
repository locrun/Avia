import { configureStore } from "@reduxjs/toolkit";
import formDataSlice from "./slices/FormDataSlice";

export const store = configureStore({
  reducer: {
    form: formDataSlice,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
