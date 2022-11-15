import { createSlice } from "@reduxjs/toolkit";

interface IFormData {
  data: {
    dateFrom: string | null;
    dateTo: string | null;
    fromCity: string | null;
    toCity: string | null;
  };
}
const initialState: IFormData = {
  data: {
    dateFrom: null,
    dateTo: null,
    fromCity: null,
    toCity: null,
  },
};

const formDataSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    getFormData: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
    },
  },
});

export const { getFormData } = formDataSlice.actions;
export default formDataSlice.reducer;
