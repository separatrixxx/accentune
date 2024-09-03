import { createSlice } from '@reduxjs/toolkit'
import { SolvedInterface } from '../../interfaces/solved.interface';


const solvedData: SolvedInterface = {
  status: '',
  data: [],
};

export const solvedSlice = createSlice({
  name: 'solved',
  initialState: {
    solved: solvedData,
  },
  reducers: {
    setSolved: (state, action) => {
      state.solved = action.payload
    },
    setSolvedDefault: (state) => {
      state.solved = solvedData;
    },
  },
});

export const { setSolved, setSolvedDefault } = solvedSlice.actions;

export default solvedSlice.reducer;
