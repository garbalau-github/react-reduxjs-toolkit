import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    // Bunch of methods that going to update our state
    add: () => {
      console.log('add()');
    },
  },
});

export default reservationsSlice.reducer;
