import { createSlice } from '@reduxjs/toolkit'
import { SecondPartInterface } from '../../interfaces/secondPart.interface';


const secondPartData: SecondPartInterface = {
    blockId: '',
    typeId: '',
};

export const secondPartSlice = createSlice({
  name: 'secondPart',
  initialState: {
    secondPart: secondPartData,
  },
  reducers: {
    chooseSecondBlockId: (state, action) => {
      state.secondPart.blockId = action.payload;
    },
    chooseSecondTypeId: (state, action) => {
      state.secondPart.typeId = action.payload;
    },
    setSecondPartDefault: (state) => {
      state.secondPart = {
        blockId: '',
        typeId: '',
      }
    },
  },
});

export const { chooseSecondBlockId, chooseSecondTypeId, setSecondPartDefault } = secondPartSlice.actions;

export default secondPartSlice.reducer;
