import { createSlice } from '@reduxjs/toolkit'


const subject: string = 'social';

export const subjectSlice = createSlice({
  name: 'subject',
  initialState: {
    subject: subject,
  },
  reducers: {
    setSubject: (state, action) => {
        state.subject = action.payload
    },
  },
});

export const { setSubject } = subjectSlice.actions;

export default subjectSlice.reducer;