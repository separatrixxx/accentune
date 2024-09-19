import { IWebApp } from "../types/telegram";
import { FirstPartInterface, FirstTaskInterface } from "./firstPart.interface";
import { QuickInterface, SolvedQuickTaskData } from "./quick.interface";
import { SubscribeItemInterface } from "./subscribe.interface";
import { Subject } from "./user.interface";
import { WebinarInfoData } from "./webinars.interface";


export interface ErrorArguments {
    webApp: IWebApp | undefined,
    subject: Subject,
    router: any,
}

export interface BaseArguments extends ErrorArguments {
    userId: number | undefined,
    text: string,
    dispatch: any,
}

export type SolvedArguments = Omit<BaseArguments, 'text'>;

export interface VariantStatsArguments extends SolvedArguments {
    date: string,
    index: number,
}

export type GetQuickArguments = Omit<BaseArguments, 'text'>;

export interface SendQuickArguments extends Omit<BaseArguments, 'text' | 'dispatch'> {
    solved: SolvedQuickTaskData
}

export interface CheckFirstAnswerArguments extends Pick<BaseArguments, 'userId' | 'subject' | 'webApp' | 'router'> {
    answer: string,
    task: FirstTaskInterface | null,
    firstPart: FirstPartInterface,
    setAnswer: (e: string) => void,
    setFirstTask: (e: FirstTaskInterface | null) => void,
    setIsFault: (e: boolean) => void,
    setIsCorrect: (e: boolean) => void,
    setIsDecided: (e: boolean) => void,
}

export interface CheckQuickArguments extends Pick<CheckFirstAnswerArguments, 'answer' | 'setAnswer' | 'setIsCorrect'> {
    quick: QuickInterface,
    dispatch: any,
}

export interface NextTaskArguments extends Pick<CheckFirstAnswerArguments, 'userId' | 'subject' | 'setAnswer' | 'setIsFault' | 'setIsDecided'> {
    webApp: IWebApp | undefined,
    router: any,
    firstPart: FirstPartInterface,
    setTask: (e: FirstTaskInterface | null) => void,
}

export interface FirstTaskArguments extends Pick<BaseArguments, 'userId' | 'webApp' | 'subject' | 'router'> {
    blockId: string,
    sortId: string,
    isTheme: boolean,
    setIsDecided: (e: boolean) => void,
    setFirstTask: (e: FirstTaskInterface) => void,
}

export interface SecondTaskArguments extends Omit<FirstTaskArguments, 'sortId' | 'isTheme' | 'setFirstTask'> {
    typeId: string,
    setSecondTask: (e: any) => void,
    setTaskId?: (e: string) => void,
}

export interface CheckSecondTaskArguments extends SecondTaskArguments {
    task_id?: string,
    answer: string,
    setAnswer: (e: string) => void,
    setIsCorrect: (e: boolean) => void,
}

export interface UpdateTaskArguments extends Pick<BaseArguments, 'userId' | 'webApp' | 'subject' | 'router'> {
    taskId: string,
}

export interface UserArguments extends Pick<BaseArguments, 'userId' | 'subject' | 'dispatch'> {
    webApp?: IWebApp | undefined,
    text?: string,
}

export interface SubscribeArguments extends Omit<BaseArguments, 'text'> {
    subscribe: SubscribeItemInterface,
    email: string | null,
}

export interface DemoSubscribeArguments extends BaseArguments {
    setIsLoading: (e: boolean) => void,
}

export interface CourseSubscribeArguments extends Omit<BaseArguments, 'dispatch'> {
    courseId: string,
    setIsLoading: (e: boolean) => void,
}

export interface CourseUnsubscribeArguments extends CourseSubscribeArguments {
    dispatch: any,
}

export interface UserCourseArguments extends Pick<BaseArguments, 'userId' | 'subject' | 'dispatch'> {
    setCoursesBlockType: (e: 'all' | 'my' | null) => void,
}

export interface WebinarInfoArguments extends Pick<BaseArguments, 'webApp' | 'subject' | 'text'> {
    webinarId: string,
    setWebinarId: (e: string | null) => void,
    setWebinarInfo: (e: WebinarInfoData | null) => void,
}

export interface UsersStatsArguments extends Pick<BaseArguments, 'subject' | 'dispatch'> {
    eventId: string | string[] | undefined,
    liveId: string | string[] | undefined,
}
