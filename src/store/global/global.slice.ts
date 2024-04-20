import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IGlobalState } from './global.interface';
import { Currency } from '@/shared/types';

const initialState: IGlobalState = {
  currency: Currency.RUB,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setGlobalCurrency: (state, action: PayloadAction<Currency>) => {
      state.currency = action.payload;
    },
  },
});

export const { setGlobalCurrency } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
