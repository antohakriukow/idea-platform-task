import { setGlobalCurrency } from './global/global.slice';

import { addStopsCount, removeStopsCount } from './filters/filters.slice';

export const rootActions = {
  setGlobalCurrency,

  addStopsCount,
  removeStopsCount,
};
