import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { containsSpecifiedID } from '../actions/getRandomSpecifiedIDs';
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
  },
});

export const { addFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
