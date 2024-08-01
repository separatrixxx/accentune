import axios, { AxiosResponse } from "axios";
import { setSolved } from "../features/solved/solvedSlice";
import { SolvedInterface, SolvedVariantStats } from "../interfaces/solved.interface";
import { setVariantStats } from "../features/variantStats/variantStatsSlice";


export async function getSolved(userId: number | undefined, dispatch: any) {
    try {
        const { data : response }: AxiosResponse<SolvedInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/solved_variants?user_id=' + userId);

        dispatch(setSolved(response));
    } catch (err: any) {
        console.log(err);
    }
}

export async function getVariantStats(userId: number | undefined, date: string, index: number, dispatch: any) {
    try {
        const { data : response }: AxiosResponse<SolvedVariantStats> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            `/variant_details?user_id=${userId}&date=${date}&index=${index}`);

        dispatch(setVariantStats(response));
    } catch (err: any) {
        console.log(err);
    }
}
