import axios from "axios";
import { IWebApp } from "../types/telegram";
import { getUser } from "./user.helper";


export async function subscribe(userId: number | undefined, text: string, webApp: IWebApp | undefined, dispatch: any) {
    webApp?.showConfirm(text, async function(isOk: boolean) {
        if (isOk && userId) {
            try {
                await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
                    '/subscribe_demo?user_id=' + userId).then(() => {
                        getUser(userId, dispatch);
                    });
            } catch (error) {
                console.error(error);
            }
        }
    });
}