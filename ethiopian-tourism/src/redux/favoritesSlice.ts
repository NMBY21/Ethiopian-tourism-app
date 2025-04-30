import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Destination = {
  name: string;
  image: string;
  description: string;
  region: string;
  category: string;
};

type FavoritesState = {
  items: Destination[];
};

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Destination>) => {
      const exists = state.items.find(d => d.name === action.payload.name);
      if (exists) {
        state.items = state.items.filter(d => d.name !== action.payload.name);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
