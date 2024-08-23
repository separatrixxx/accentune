export interface UserCourseInterface {
    status: string,
    data: UserCourseData,
};

export interface UserCourseData {
    course_id: string,
    course_name: string,
    date_start: string,
    date_end: string,
    teacher_name: string,
    course_description: string,
    course_status: string,
    course_plan: string,
};

export interface UserWebinarsInterface {
    status: string,
    data: UserWebinarData[],
};

export interface UserWebinarData {
    webinar_id: string,
    date: number,
    passed: boolean,
};

export interface WebinarInfoInterface {
    status: string,
    data: {
        webinar_id: string,
        webinar_name: string,
        theme: string,
        date: number,
        passed: boolean,
        description: string,
        topics: string[],
        recording_url: string,
        program: {
            [key: string]: string,
        }
    }
};

export interface CoursesInterface {
    status: string,
    data: CoursesData[],
};
  
export interface CoursesData {
    cource_id: string,
    cource_name: string,
    cource_capacity: number,
    already_in: number,
    cource_status: string,
    start_date: string,
    end_date: string,
    description: string,
};

export interface CourseInfoInterface {
    status: string,
    data: CoursesInfoData,
};

export interface CoursesInfoData {
    cource_id: string,
    cource_name: string,
    cource_capacity: number,
    already_in: number,
    cource_status: string,
    start_date: string,
    end_date: string,
    cource_description: string
    cource_plan: string,
};
