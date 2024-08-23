import { createSlice } from '@reduxjs/toolkit'
import { SecondPartInterface } from '../../interfaces/secondPart.interface';


const secondPartData: SecondPartInterface = {
    blockId: '',
    blockName: '',
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
    chooseSecondBlockName: (state, action) => {
      state.secondPart.blockName = action.payload;
    },
    chooseSecondTypeId: (state, action) => {
      state.secondPart.typeId = action.payload;
    },
    setSecondPartDefault: (state) => {
      state.secondPart = secondPartData;
    },
  },
});

export const { chooseSecondBlockId, chooseSecondTypeId, setSecondPartDefault, chooseSecondBlockName } = secondPartSlice.actions;

export default secondPartSlice.reducer;
