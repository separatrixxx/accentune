import { IWebApp } from "../types/telegram";
import { SubscribeItemInterface } from "./subscribe.interface";
import { CoursesInterface, WebinarInfoData } from "./webinars.interface";


export interface SubscribeArguments {
    webApp: IWebApp | undefined,
    userId: number | undefined,
    subscribe: SubscribeItemInterface,
    email: string | null,
    router: any,
    dispatch: any,
}

export interface BaseArguments {
    userId: number | undefined,
    webApp: IWebApp | undefined,
    text: string,
    router: any,
    dispatch: any,
}

export interface DemoSubscribeArguments extends BaseArguments {
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

export interface WebinarInfoArguments {
    webinarId: string,
    webApp: IWebApp | undefined,
    text: string,
    setWebinarId: (e: string | null) => void,
    setWebinarInfo: (e: WebinarInfoData | null) => void,
}
