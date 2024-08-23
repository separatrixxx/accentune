import { createSlice } from '@reduxjs/toolkit'
import { UserCourseData } from '../../interfaces/webinars.interface';


const userCourseData: UserCourseData = {
    course_id: '',
    course_name: '',
    date_start: '',
    date_end: '',
    teacher_name: '',
    course_description: '',
    course_status: '',
    course_plan: '',
};

export const userCourseSlice = createSlice({
  name: 'userCourse',
  initialState: {
    userCourse: userCourseData,
  },
  reducers: {
    setUserCourse: (state, action) => {
      state.userCourse = action.payload
    },
    setUserCourseDefault: (state) => {
      state.userCourse = userCourseData;
    },
  },
});

export const { setUserCourse, setUserCourseDefault } = userCourseSlice.actions;

export default userCourseSlice.reducer;