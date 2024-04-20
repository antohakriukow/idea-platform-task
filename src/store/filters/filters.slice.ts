import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFiltersState } from './filters.interface';

const initialState: IFiltersState = {
  stops: [0],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStopsCount: (state, action: PayloadAction<number[]>) => {
      state.stops = action.payload;
    },
  },
});

export const { setStopsCount } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
