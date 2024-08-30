import axios, { AxiosResponse } from "axios";
import { UserInterface } from "../interfaces/user.interface";
import { setUser } from "../features/user/userSlice";
import { UserArguments } from "../interfaces/refactor.interface";
import { getDomain } from "./domain.helper";


export async function getUser(args: UserArguments) {
    const { userId, subject, dispatch } = args;

    try {
        const { data : response }: AxiosResponse<UserInterface> = await axios.get(getDomain(subject) +
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
    const { userId, webApp, subject, text } = args;

    try {
        axios.get(getDomain(subject) +
            '/register_new_user?user_id=' + userId);

        getUser(args);
    } catch (err: any) {
        webApp?.showAlert(text || ''); 

        console.log(err);
    }
}
