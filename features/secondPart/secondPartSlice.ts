import { createSlice } from '@reduxjs/toolkit'
import { SecondPartInterface } from '../../interfaces/tasks.interface';


const secondPartData: SecondPartInterface = {
    blockId: '',
    type: '',
};

export const secondPartSlice = createSlice({
  name: 'secondPart',
  initialState: {
    secondPart: secondPartData,
  },
  reducers: {
    setsecondPart: (state, actions) => {
      state.secondPart = actions.payload
    },
    chooseSecondBlockId: (state, action) => {
      state.secondPart.blockId = action.payload;
    },
    chooseType: (state, action) => {
      state.secondPart.type = action.payload;
    },
  },
});

export const { setsecondPart, chooseSecondBlockId, chooseType } = secondPartSlice.actions

export default secondPartSlice.reducer;