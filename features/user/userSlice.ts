import { createSlice } from '@reduxjs/toolkit'
import { UserInterface } from '../../interfaces/user.interface';


const userData: UserInterface = {
    isSubscriptionActive: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: userData,
  },
  reducers: {
    setUser: (state, actions) => {
        state.user = actions.payload
    },
    toggleSubscription: (state) => {
      state.user.isSubscriptionActive = !state.user.isSubscriptionActive;
    },
  },
})

export const { setUser, toggleSubscription } = userSlice.actions

export default userSlice.reducer;