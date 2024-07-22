import { createSlice } from '@reduxjs/toolkit'
import { FirstPartInterface } from '../../interfaces/tasks.interface';


const firstPartData: FirstPartInterface = {
    blockId: '',
    isThemes: true,
    sortName: '',
};

export const firstPartSlice = createSlice({
  name: 'firstPart',
  initialState: {
    firstPart: firstPartData,
  },
  reducers: {
    setFirstPart: (state, actions) => {
      state.firstPart = actions.payload
    },
    chooseFirstBlockId: (state, action) => {
      state.firstPart.blockId = action.payload;
    },
    toggleTheme: (state) => {
      state.firstPart.isThemes = !state.firstPart.isThemes;
    },
    chooseSortName: (state, action) => {
      state.firstPart.sortName = action.payload;
    },
  },
});

export const { setFirstPart, chooseFirstBlockId, toggleTheme, chooseSortName } = firstPartSlice.actions

export default firstPartSlice.reducer;