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
  },
});

export const { setSolved } = solvedSlice.actions;

export default solvedSlice.reducer;