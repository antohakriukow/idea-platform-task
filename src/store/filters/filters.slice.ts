import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFiltersState } from './filters.interface';

const initialState: IFiltersState = {
  stops: [0],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addStopsCount: (state, action: PayloadAction<number>) => {
      state.stops.push(action.payload);
    },
    removeStopsCount: (state, action: PayloadAction<number>) => {
      state.stops.filter((stopsCount) => stopsCount !== action.payload);
    },
  },
});

export const { addStopsCount, removeStopsCount } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
