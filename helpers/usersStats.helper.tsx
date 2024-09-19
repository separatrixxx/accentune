import axios, { AxiosResponse } from "axios";
import { getDomain } from "./domain.helper";
import { UsersStatsArguments } from "../interfaces/refactor.interface";
import { UsersStatsInterface } from "../interfaces/usersStats.interface";
import { setUsersStats } from "../features/usersStats/usersStatsSlice";


export async function getUserStats(args: UsersStatsArguments) {
    const { eventId, liveId, subject, dispatch } = args;

    try {
        const { data : response }: AxiosResponse<UsersStatsInterface> = await axios.get(getDomain(subject) +
            `/get_users_stats?event_id=${eventId}&live_id=${liveId}`);

        dispatch(setUsersStats(response));
    } catch (err) {      
        console.log(err);
    }
}
