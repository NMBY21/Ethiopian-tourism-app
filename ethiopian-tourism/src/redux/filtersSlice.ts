import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FiltersState = {
  searchText: string;
  region: string;
  category: string;
};

const initialState: FiltersState = {
  searchText: "",
  region: "",
  category: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    setRegion(state, action: PayloadAction<string>) {
      state.region = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setSearchText, setRegion, setCategory, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
