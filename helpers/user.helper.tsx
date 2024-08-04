import axios, { AxiosResponse } from "axios";
import { UserInterface } from "../interfaces/user.interface";
import { setUser } from "../features/user/userSlice";


export async function getUser(userId: number | undefined, dispatch: any) {
    try {
        const { data : response }: AxiosResponse<UserInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/get_user_by_id?user_id=' + userId);

        dispatch(setUser(response));
    } catch (err: any) {
        console.log(err)
        if (err.response && err.response.data.error === 'User not found') {
            registerNewUser(userId, dispatch);
        }

        console.log(err);
    }
}

export async function registerNewUser(userId: number | undefined, dispatch: any) {
    try {
        axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/register_new_user?user_id=' + userId);

        getUser(userId, dispatch);
    } catch (err: any) {
        console.log(err);
    }
}
