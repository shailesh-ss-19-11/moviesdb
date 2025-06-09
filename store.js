import { configureStore } from "@reduxjs/toolkit";
import searchInputSlice from "./src/redux/SearchInputSlice";

export const store = configureStore({
  reducer: {
    searchInput: searchInputSlice,
  },
});
