import { createSlice } from '@reduxjs/toolkit'
import { UserWebinarsInterface } from '../../interfaces/webinars.interface';


const userWebinarsData: UserWebinarsInterface = {
  status: '',
  data: [],
};

export const userWebinarsSlice = createSlice({
  name: 'userWebinars',
  initialState: {
    userWebinars: userWebinarsData,
  },
  reducers: {
    setUserWebinars: (state, action) => {
      state.userWebinars = {
        status: 'success',
        data: action.payload,
      }
    },
    setUserWebinarsDefault: (state) => {
      state.userWebinars = userWebinarsData;
    },
  },
});

export const { setUserWebinars, setUserWebinarsDefault } = userWebinarsSlice.actions;

export default userWebinarsSlice.reducer;