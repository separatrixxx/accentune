import { toggleSubscription } from "../features/user/userSlice";
import { IWebApp } from "../types/telegram";


export function subscribe(text: string, webApp: IWebApp | undefined, dispatch: any): void {
    webApp?.showConfirm(text, function(isOk: boolean) {
        if (isOk) {
            dispatch(toggleSubscription());
        }
    });
}