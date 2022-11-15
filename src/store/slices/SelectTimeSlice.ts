import { createSlice } from "@reduxjs/toolkit";

interface ITime {
  time: {
    before: string;
    after: string;
  };
}
const initialState: ITime = {
  time: {
    before: "09:20",
    after: "11:05",
  },
};

const selectTimeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    getTime: (state, action) => {
      state.time = action.payload;
    },
  },
});

export const { getTime } = selectTimeSlice.actions;
export default selectTimeSlice.reducer;
