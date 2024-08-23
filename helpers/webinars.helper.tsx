import axios, { AxiosResponse } from "axios";
import { CourseInfoInterface, CoursesData, CoursesInterface, UserCourseInterface } from "../interfaces/webinars.interface";
import { CourseSubscribeArguments, CourseUnsubscribeArguments, UserCourseArguments } from "../interfaces/refactor.interface";
import { setUserCourse, setUserCourseDefault } from "../features/userCourse/userCourseSlice";


export async function getUserCourse(args: UserCourseArguments) {
    const { userId, setCoursesBlockType, dispatch } = args;

    try {
        const { data : response }: AxiosResponse<UserCourseInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/get_course_for_user?user_id=' + userId);

        dispatch(setUserCourse(response.data));
        setCoursesBlockType('my');
    } catch (err: any) {
        setCoursesBlockType('all');
        console.error(err);
    }
}

export async function getAvailableCourses(setAvailableCourses: (e: CoursesData[] | null) => void) {
    try {
        const { data : response }: AxiosResponse<CoursesInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/courses');

        setAvailableCourses(response.data);
    } catch (err: any) {
        console.error(err);
    }
}

export async function getCourseInfo(courseId: string, setCourseInfo: (e: CourseInfoInterface | null) => void,
    setIsLoading: (e: boolean) => void) {
    try {
        const { data : response }: AxiosResponse<CourseInfoInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/course?course_id=' + courseId);

        setCourseInfo(response);
        setIsLoading(false);
    } catch (err: any) {
        setIsLoading(false);
        console.error(err);
    }
}

export async function subscribeForCourse(args: CourseSubscribeArguments) {
    const { userId, courseId, text, webApp, router, setIsLoading } = args;

    try {
        setIsLoading(true);

        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            `/subscribe_course?user_id=${userId}&course_id=${courseId}`).then(() => {
                setIsLoading(false);

                webApp?.showAlert(text, async function() {
                    router.push('/');
                });
            });
    } catch (err: any) {
        setIsLoading(false);
        console.error(err);
    }
}

export async function unsubscribeForCourse(args: CourseUnsubscribeArguments) {
    const { userId, courseId, text, webApp, router, dispatch, setIsLoading } = args;

    try {
        setIsLoading(true);

        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            `/unsubscribe_course?user_id=${userId}&course_id=${courseId}`).then(() => {
                setIsLoading(false);

                webApp?.showAlert(text, async function() {
                    dispatch(setUserCourseDefault());
                    router.push('/');
                });                
            });
    } catch (err: any) {
        setIsLoading(false);
        console.error(err);
    }
}
