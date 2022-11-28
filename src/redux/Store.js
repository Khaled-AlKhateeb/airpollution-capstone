import { configureStore } from '@reduxjs/toolkit';

import continentSlice from './airpollutionReducer';

const store = configureStore({
  reducer: {
    continent: continentSlice,
  },
});

export default store;
