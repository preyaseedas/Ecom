import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'Count',

  initialState: {
    count: 0,
  },
  reducers: {
    increaseCount: (state, action) => {
      state.count = action.payload + 1;
    },
    decrementCount: (state, action) => {
      state.count = action.payload;
    },
  },
});
export default counterSlice.reducer;
export const {increaseCount, decrementCount} = counterSlice.actions;
