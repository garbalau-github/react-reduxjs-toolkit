import { configureStore } from '@reduxjs/toolkit';

import reservationReducer from '../features/reservationSlice';
import customerReducer from '../features/customerSlice';

export const store = configureStore({
  // All our slices
  reducer: {
    reservations: reservationReducer,
    customer: customerReducer,
  },
});

// Configure our types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
