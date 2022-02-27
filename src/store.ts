import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { metApi } from './apis/metApi';
import { wikiApi } from './apis/wikiApi';
import favouritesReducer from './feautres/favouritesSlice';

export const store = configureStore({
  reducer: {
    [metApi.reducerPath]: metApi.reducer,
    [wikiApi.reducerPath]: wikiApi.reducer,
    favourites: favouritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(metApi.middleware, wikiApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
