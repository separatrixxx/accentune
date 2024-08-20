import { IWebApp } from "../types/telegram";
import { SubscribeItemInterface } from "./subscribe.interface";


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
