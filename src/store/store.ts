import { configureStore } from "@reduxjs/toolkit";
import formDataSlice from "./slices/FormDataSlice";
import selectTimeSlice from "./slices/SelectTimeSlice";

export const store = configureStore({
  reducer: {
    form: formDataSlice,
    time: selectTimeSlice,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
