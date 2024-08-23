import { createSlice } from '@reduxjs/toolkit'
import { QuickInterface } from '../../interfaces/quick.interface';


const quickData: QuickInterface = {
    type: '',
    num: 0,
    len: 0,
    variant: [],
    solved: {
      solved_variant: [],
    },
};

export const quickSlice = createSlice({
  name: 'quick',
  initialState: {
    quick: quickData,
  },
  reducers: {
    chooseQuickType: (state, action) => {
      state.quick.type = action.payload
    },
    setQuickVariant: (state, action) => {
      state.quick.variant = action.payload
    },
    setQuickVariantLength: (state, action) => {
      state.quick.len = action.payload
    },
    toggleQuickNum: (state) => {
      state.quick.num += 1
    },
    setQuickDefault: (state) => {
      state.quick = quickData;
    },
    updateQuickSolved: (state, action) => {
      state.quick.solved.solved_variant.push(action.payload);
    },
  },
});

export const { chooseQuickType, setQuickVariant, setQuickVariantLength, toggleQuickNum,
  setQuickDefault, updateQuickSolved } = quickSlice.actions;

export default quickSlice.reducer;