import { createSlice } from '@reduxjs/toolkit'
import { SubscribeInterface } from '../../interfaces/subscribe.interface';


const subscribeData: SubscribeInterface = {
  status: -1,
  multiplayer: [],
  group: [],
};

export const subscribeSlice = createSlice({
  name: 'subscribe',
  initialState: {
    subscribe: subscribeData,
  },
  reducers: {
    setSubscribeMultiplayer: (state, action) => {
      state.subscribe.multiplayer = action.payload;
    },
    setSubscribeGroup: (state, action) => {
      state.subscribe.group = action.payload;
    },
    changeStatus: (state, action) => {
      state.subscribe.status = action.payload;
    },
    setSubscribeDefault: (state) => {
      state.subscribe = subscribeData;
    },
  },
});

export const { setSubscribeMultiplayer, setSubscribeGroup, changeStatus, setSubscribeDefault } = subscribeSlice.actions;

export default subscribeSlice.reducer;
