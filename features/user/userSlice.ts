import { createSlice } from '@reduxjs/toolkit'
import { UserInterface } from '../../interfaces/user.interface';


const userData: UserInterface = {
  user_name: null,
  email: null,
  privileges: null,
  user_role: null,
  tasks_first_part_solved_today: 0,
  subscription_type: null,
  date_paid_sub_end: null,
  first_part_small_stat: {
    solved_task_count: 0,
    pts_total: 0
  },
  second_part_small_stat: "not_paid_user",
  demo_used: false,
  cource_picked: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: userData,
  },
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;