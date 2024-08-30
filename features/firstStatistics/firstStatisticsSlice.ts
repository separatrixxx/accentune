import { createSlice } from '@reduxjs/toolkit'
import { FirstPartStatisticsInterface } from '../../interfaces/statistics.interface';


const firstStatisticsData: FirstPartStatisticsInterface = {
    overall_stats: {
        total_task_count: 0,
        solved_task_count: -1,
    },
    block_stats: [],
    theme_stats: [],
    type_stats: [],
};

export const firstStatisticsSlice = createSlice({
  name: 'firstStatistics',
  initialState: {
    firstStatistics: firstStatisticsData,
  },
  reducers: {
    setFirstStatistics: (state, action) => {
      state.firstStatistics = action.payload;
    },
    setStatsError: (state) => {
      state.firstStatistics.overall_stats.solved_task_count = 0;
    },
  },
});

export const { setFirstStatistics, setStatsError } = firstStatisticsSlice.actions;

export default firstStatisticsSlice.reducer;
