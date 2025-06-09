import { createSlice } from "@reduxjs/toolkit";

export const searchInputSlice = createSlice({
  name:"searchInputSlice",
  initialState: {
    inputValue: "",
  },
  reducers: {
    searchInput: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { searchInput } = searchInputSlice.actions;
export default searchInputSlice.reducer;
