import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  containsSpecifiedID,
  findSpecifiedID,
} from '../actions/getRandomSpecifiedIDs';
import { SpecifiedArtworkID } from '../types/SpecifiedArtworkID';

const favourites = localStorage.getItem('favourites');
const initialState: SpecifiedArtworkID[] = favourites
  ? JSON.parse(favourites)
  : [];

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<SpecifiedArtworkID>) => {
      const specID = action.payload;
      if (containsSpecifiedID(specID, state)) return;
      state.push(specID);
      localStorage.setItem('favourites', JSON.stringify(state));
    },
    removeFavourite: (state, action: PayloadAction<SpecifiedArtworkID>) => {
      const index = findSpecifiedID(action.payload, state);
      if (index === -1) return;
      state.splice(index, 1);
      localStorage.setItem('favourites', JSON.stringify(state));
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
