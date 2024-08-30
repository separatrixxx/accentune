import axios, { AxiosResponse } from "axios";
import { CourseInfoInterface, CoursesData, CoursesInterface, UserCourseInterface, WebinarInfoInterface } from "../interfaces/webinars.interface";
import { BaseArguments, CourseSubscribeArguments, CourseUnsubscribeArguments, UserCourseArguments, WebinarInfoArguments } from "../interfaces/refactor.interface";
import { setUserCourse, setUserCourseDefault } from "../features/userCourse/userCourseSlice";
import { setUserWebinars } from "../features/userWebinars/userWebinarsSlice";
import { getDomain } from "./domain.helper";
import { Subject } from "../interfaces/user.interface";


export async function getUserCourse(args: UserCourseArguments) {
    const { userId, subject, setCoursesBlockType, dispatch } = args;

    try {
        const { data : response }: AxiosResponse<UserCourseInterface> = await axios.get(getDomain(subject) +
            '/get_course_for_user?user_id=' + userId);

        dispatch(setUserCourse(response.data));
        setCoursesBlockType('my');
    } catch (err: any) {
        setCoursesBlockType('all');
        console.error(err);
    }
}

export async function getAvailableCourses(subject: Subject, setAvailableCourses: (e: CoursesData[] | null) => void) {
    try {
        const { data : response }: AxiosResponse<CoursesInterface> = await axios.get(getDomain(subject) +
            '/courses');

        setAvailableCourses(response.data);
    } catch (err: any) {
        console.error(err);
    }
}

export async function getCourseInfo(courseId: string, subject: Subject, setCourseInfo: (e: CourseInfoInterface | null) => void,
    setIsLoading: (e: boolean) => void) {
    try {
        const { data : response }: AxiosResponse<CourseInfoInterface> = await axios.get(getDomain(subject) +
            '/course?course_id=' + courseId);

        setCourseInfo(response);
        setIsLoading(false);
    } catch (err: any) {
        setIsLoading(false);
        console.error(err);
    }
}

export async function subscribeForCourse(args: CourseSubscribeArguments) {
    const { userId, courseId, text, webApp, subject, router, setIsLoading } = args;

    try {
        setIsLoading(true);

        await axios.post(getDomain(subject) +
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
    const { userId, courseId, text, webApp, subject, router, dispatch, setIsLoading } = args;

    try {
        setIsLoading(true);

        await axios.post(getDomain(subject) +
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

export async function getUserWebinars(args: BaseArguments) {
    const { userId, webApp, subject, router, text, dispatch } = args;

    try {
        const { data : response }: AxiosResponse<UserCourseInterface> = await axios.get(getDomain(subject) +
            '/user_webinars?user_id=' + userId);

        dispatch(setUserWebinars(response.data));
    } catch (err: any) {
        webApp?.showAlert(text, async function() {
            dispatch(setUserCourseDefault());
            router.push('/webinars');
        }); 

        console.error(err);
    }
}

export async function getWebinarData(args: WebinarInfoArguments) {
    const { webinarId, webApp, subject, text, setWebinarId, setWebinarInfo } = args;

    try {
        const { data : response }: AxiosResponse<WebinarInfoInterface> = await axios.get(getDomain(subject) +
            '/webinar?webinar_id=' + webinarId);

            setWebinarInfo(response.data);
    } catch (err: any) {
        webApp?.showAlert(text, async function() {
            setWebinarId(null);
        }); 

        console.error(err);
    }
}
