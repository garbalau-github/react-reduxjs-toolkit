import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomerState {
  value: Customer[];
}

interface AddFoodToCustomerPayload {
  food: string;
  id: string;
}

interface Customer {
  id: string;
  name: string;
  food: string[];
}

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    // Bunch of methods that going to update our state
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (
      state,
      action: PayloadAction<AddFoodToCustomerPayload>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

// Export Actions
export const { addCustomer, addFoodToCustomer } = customerSlice.actions;

// Export Reducer
export default customerSlice.reducer;
