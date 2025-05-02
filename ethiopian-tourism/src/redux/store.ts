import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import favoritesReducer from "./favoritesSlice"; // if you have favorites

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

