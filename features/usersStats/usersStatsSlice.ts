import { createSlice } from '@reduxjs/toolkit'
import { UsersStatsInterface } from '../../interfaces/usersStats.interface';


const usersStatsData: UsersStatsInterface = {
    event_name: '',
    tasks_stats: [],
    users_stats: [],
};

export const usersStatsSlice = createSlice({
  name: 'usersStats',
  initialState: {
    usersStats: usersStatsData,
  },
  reducers: {
    setUsersStats: (state, action) => {
        state.usersStats = action.payload
    },
  },
});

export const { setUsersStats } = usersStatsSlice.actions;

export default usersStatsSlice.reducer;
