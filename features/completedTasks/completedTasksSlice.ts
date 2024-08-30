import { createSlice } from '@reduxjs/toolkit'
import { SecondPartCompletedInterface } from '../../interfaces/completed.interface';


const completedTasksData: SecondPartCompletedInterface = {
  data: {
    status: 'loading',
    data: [],
  },
  unsubmitted: null,
  completed: null,
};

export const completedTasksSlice = createSlice({
  name: 'completedTasks',
  initialState: {
    completedTasks: completedTasksData,
  },
  reducers: {
    setCompletedTasks: (state, action) => {
      state.completedTasks.data = action.payload;
    },
    setDefault: (state) => {
      state.completedTasks = {
        data: {
          status: 'loading',
          data: [],
        },
        unsubmitted: null,
        completed: null,
      };
    },
    setCompletedError: (state) => {
      state.completedTasks.data.status = 'error';
    },
    setUnsubmitted: (state, action) => {
      state.completedTasks.unsubmitted = action.payload;
    },
    setCompleted: (state, action) => {
      state.completedTasks.completed = action.payload;
    },
    setCompletedDefault: (state) => {
      state.completedTasks.completed = null;
      state.completedTasks.unsubmitted = null;
    },
  },
});

export const { setCompletedTasks, setDefault, setCompletedError, setUnsubmitted,
  setCompleted, setCompletedDefault } = completedTasksSlice.actions;

export default completedTasksSlice.reducer;
