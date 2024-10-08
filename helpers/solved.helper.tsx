import axios, { AxiosResponse } from "axios";
import { setSolved } from "../features/solved/solvedSlice";
import { SolvedInterface, SolvedVariantStats } from "../interfaces/solved.interface";
import { setVariantStats } from "../features/variantStats/variantStatsSlice";
import { SolvedArguments, VariantStatsArguments } from "../interfaces/refactor.interface";
import { setLocale } from "./locale.helper";
import { getDomain } from "./domain.helper";


export async function getSolved(args: SolvedArguments) {
    const { userId, webApp, subject, router, dispatch } = args;

    try {
        const { data : response }: AxiosResponse<SolvedInterface> = await axios.get(getDomain(subject) +
            '/solved_variants?user_id=' + userId);

        dispatch(setSolved(response));
    } catch (err: any) {
        webApp?.showAlert(setLocale(router.locale).errors.get_variant_error, async function() {
            router.push('/');
        }); 
        
        console.log(err);
    }
}

export async function getVariantStats(args: VariantStatsArguments) {
    const { userId, webApp, subject, router, dispatch, date, index } = args;

    try {
        const { data : response }: AxiosResponse<SolvedVariantStats> = await axios.get(getDomain(subject) +
            `/variant_details?user_id=${userId}&date=${date}&index=${index}`);

        dispatch(setVariantStats(response));
    } catch (err: any) {
        webApp?.showAlert(setLocale(router.locale).errors.get_stats_error, async function() {
            router.push('/');
        }); 

        console.log(err);
    }
}
