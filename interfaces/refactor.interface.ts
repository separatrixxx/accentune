import { IWebApp } from "../types/telegram";
import { SubscribeItemInterface } from "./subscribe.interface";
import { CoursesInterface } from "./webinars.interface";


export interface SubscribeArguments {
    webApp: IWebApp | undefined,
    userId: number | undefined,
    subscribe: SubscribeItemInterface,
    email: string | null,
    router: any,
    dispatch: any,
}

export interface DemoSubscribeArguments {
    userId: number | undefined,
    text: string,
    webApp: IWebApp | undefined,
    router: any,
    dispatch: any,
    setIsLoading: (e: boolean) => void,
}

export interface CourseSubscribeArguments {
    userId: number | undefined,
    courseId: string,
    text: string,
    webApp: IWebApp | undefined,
    router: any,
    setIsLoading: (e: boolean) => void,
}

export interface CourseUnsubscribeArguments extends CourseSubscribeArguments {
    dispatch: any,
}

export interface UserCourseArguments {
    userId: number | undefined,
    setCoursesBlockType: (e: 'all' | 'my' | null) => void,
    dispatch: any,
}
