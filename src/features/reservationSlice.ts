import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReservationState {
  value: string[];
}

const initialState: ReservationState = {
  value: [],
};

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    // Bunch of methods that going to update our state
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

// Export Actions
export const { addReservation, removeReservation } = reservationsSlice.actions;

// Export Reducer
export default reservationsSlice.reducer;
