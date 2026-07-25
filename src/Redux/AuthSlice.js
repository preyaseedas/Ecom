import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    signUpData: {},
    forgetData: 0 || '',
  },
  reducers: {
    setSignUpData: (state, action) => {
      state.signUpData = action.payload;
    },
    setForgetData: (state, action) => {
      state.forgetData = action.payload;
    },
  },
});
export default authSlice.reducer;
export const {setSignUpData, setForgetData} = authSlice.actions;
