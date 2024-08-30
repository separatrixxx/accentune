import axios, { AxiosResponse } from "axios";
import { getDomain } from "./domain.helper";
import { ErrorArguments } from "../interfaces/refactor.interface";
import { setLocale } from "./locale.helper";
import { setPromo } from "../features/promo/promoSlice";
import { PromoInterface } from "../interfaces/promo.interface";


export async function getPromo(args: ErrorArguments, dispatch: any) {
    const { webApp, subject, router } = args;

    try {
        const { data : response }: AxiosResponse<PromoInterface> = await axios.get(getDomain(subject) +
            '/get_promos');

        dispatch(setPromo(response.promos));
    } catch (err: any) {
        webApp?.showAlert(setLocale(router.locale).errors.get_promo_error); 

        console.log(err);
    }
}
