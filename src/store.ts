import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {metApi} from './apis/metApi';

export const store = configureStore({
  reducer: {
    [metApi.reducerPath]: metApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(metApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
