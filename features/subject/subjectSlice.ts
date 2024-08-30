import { createSlice } from '@reduxjs/toolkit'
import { Subject } from '../../interfaces/user.interface';


const subject: Subject = 'obj';

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
