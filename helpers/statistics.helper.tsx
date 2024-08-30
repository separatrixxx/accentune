import axios, { AxiosResponse } from "axios";
import { FirstPartStatisticsInterface } from "../interfaces/statistics.interface";
import { setFirstStatistics, setStatsError } from "../features/firstStatistics/firstStatisticsSlice";
import { getDomain } from "./domain.helper";
import { Subject } from "../interfaces/user.interface";


export async function getFirstStatistics(userId: number | undefined, subject: Subject, dispatch: any) {
    try {
        const { data : response }: AxiosResponse<FirstPartStatisticsInterface> = await axios.get(getDomain(subject) +
            '/get_first_part_comprehensive_user_statistics?user_id=' + userId);

        dispatch(setFirstStatistics(response));
    } catch (err) {
        dispatch(setStatsError());
        
        console.log(err);
    }
}
