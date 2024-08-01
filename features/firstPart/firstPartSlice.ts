import { createSlice } from '@reduxjs/toolkit'
import { FirstPartInterface } from '../../interfaces/firstPart.interface';


const firstPartData: FirstPartInterface = {
  blockId: '',
  isThemes: true,
  sortId: '',
};

export const firstPartSlice = createSlice({
  name: 'firstPart',
  initialState: {
    firstPart: firstPartData,
  },
  reducers: {
    chooseFirstBlockId: (state, action) => {
      state.firstPart.blockId = action.payload;
    },
    toggleTheme: (state) => {
      state.firstPart.isThemes = !state.firstPart.isThemes;
    },
    chooseSortId: (state, action) => {
      state.firstPart.sortId = action.payload;
    },
    setFirstPartDefault: (state) => {
      state.firstPart = {
        blockId: '',
        isThemes: true,
        sortId: '',
      }
    },
  },
});

export const { chooseFirstBlockId, toggleTheme, chooseSortId, setFirstPartDefault } = firstPartSlice.actions;

export default firstPartSlice.reducer;