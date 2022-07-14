import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from '../features/reservationSlice';

export const store = configureStore({
  // All our slices
  reducer: {
    reservations: reservationReducer,
  },
});

// Configure our types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
