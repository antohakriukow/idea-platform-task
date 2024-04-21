import { configureStore } from '@reduxjs/toolkit';
import { globalReducer } from './global/global.slice';
import { filtersReducer } from './filters/filters.slice';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    filters: filtersReducer,
  },
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
