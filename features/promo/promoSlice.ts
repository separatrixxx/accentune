import { createSlice } from '@reduxjs/toolkit'
import { PromoData } from '../../interfaces/promo.interface';


const promoData: PromoData[] = [];

export const promoSlice = createSlice({
  name: 'promo',
  initialState: {
    promo: promoData,
  },
  reducers: {
    setPromo: (state, action) => {
      state.promo = action.payload
    },
  },
});

export const { setPromo } = promoSlice.actions;

export default promoSlice.reducer;
