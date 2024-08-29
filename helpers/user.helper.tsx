import axios, { AxiosResponse } from "axios";
import { UserInterface } from "../interfaces/user.interface";
import { setUser } from "../features/user/userSlice";
import { UserArguments } from "../interfaces/refactor.interface";


export async function getUser(args: UserArguments) {
    const { userId, dispatch } = args;

    try {
        const { data : response }: AxiosResponse<UserInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/get_user_by_id?user_id=' + userId);

        dispatch(setUser(response));
    } catch (err: any) {
        if (err.response && err.response.data.error === 'User not found') {
            registerNewUser(args);
        }

        console.log(err);
    }
}

export async function registerNewUser(args: UserArguments) {
    const { userId, webApp, text } = args;

    try {
        axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/register_new_user?user_id=' + userId);

        getUser(args);
    } catch (err: any) {
        webApp?.showAlert(text || ''); 

        console.log(err);
    }
}
