import { createSlice } from '@reduxjs/toolkit'
import { QuickInterface } from '../../interfaces/tasks.interface';


const quickData: QuickInterface = {
    type: '',
};

export const quickSlice = createSlice({
  name: 'quick',
  initialState: {
    quick: quickData,
  },
  reducers: {
    setQuick: (state, actions) => {
      state.quick = actions.payload
    },
  },
});

export const { setQuick } = quickSlice.actions

export default quickSlice.reducer;