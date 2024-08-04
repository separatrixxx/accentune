import { IWebApp } from "../types/telegram";
import { SubscribeItemInterface, TransactionData } from "./subscribe.interface";


export interface SubscribeArguments {
    webApp: IWebApp | undefined,
    userId: number | undefined,
    subscribe: SubscribeItemInterface,
    email: string | null,
    router: any,
    dispatch: any,
}
