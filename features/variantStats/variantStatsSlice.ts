import { createSlice } from '@reduxjs/toolkit'
import { SolvedVariantStats } from '../../interfaces/solved.interface';


const variantStatsData: SolvedVariantStats = {
    status: '',
    data: [],
};

export const variantStatsSlice = createSlice({
  name: 'variantStats',
  initialState: {
    variantStats: variantStatsData,
  },
  reducers: {
    setVariantStats: (state, action) => {
        state.variantStats = action.payload
    },
  },
});

export const { setVariantStats } = variantStatsSlice.actions;

export default variantStatsSlice.reducer;