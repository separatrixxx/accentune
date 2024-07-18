import { createSlice } from '@reduxjs/toolkit'
import { UserInterface } from '../../interfaces/user.interface';


const userData: UserInterface = {
    isSubscriptionActive: false,
    subject: 'social',
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
    chooseSubject: (state, action) => {
      state.user.subject = action.payload;
    },
  },
});

export const { setUser, toggleSubscription, chooseSubject } = userSlice.actions

export default userSlice.reducer;