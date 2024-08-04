import axios, { AxiosResponse } from "axios";
import { IWebApp } from "../types/telegram";
import { getUser } from "./user.helper";
import { SubscribeItemInterface, TransactionData } from "../interfaces/subscribe.interface";
import { setSubscribeMultiplayer, setSubscribeGroup, changeStatus } from "../features/subscribe/subscribeSlice";
import { setLocale } from "./locale.helper";
import { SubscribeArguments } from "../interfaces/refactor.helper";


export async function demoSubscribe(userId: number | undefined, text: string, webApp: IWebApp | undefined, dispatch: any) {
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

export async function getPrices(dispatch: any) {
    try {
        const { data : response }: AxiosResponse<SubscribeItemInterface[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/get_prices_by_type?sub_type=multiplayer');

        dispatch(setSubscribeMultiplayer(response));
    } catch (err) {
        console.error(err);
    }

    try {
        const { data : response }: AxiosResponse<SubscribeItemInterface[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/get_prices_by_type?sub_type=group');

        dispatch(setSubscribeGroup(response));
        dispatch(changeStatus(1));
    } catch (err) {
        dispatch(changeStatus(1));
        console.error(err);
    }
}

export async function createPretransaction(args: SubscribeArguments) {
    const { webApp, userId, subscribe, router, dispatch } = args;

    webApp?.showConfirm(setLocale(router.locale).activate_subscription + '?', async function(isOk: boolean) {
        if (isOk) {
            try {
                dispatch(changeStatus(-1));
                
                await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
                    `/create_pretransaction?user_id=${userId}&price_id=${subscribe.id}`)
                        .then(r => {
                            createTransaction(args, r.data.transaction_data);
                        });
            } catch (err) {
                dispatch(changeStatus(1));

                console.error(err);
            }
        }
    });
}

export async function createTransaction(args: SubscribeArguments, transactionData: TransactionData) {
    const { webApp, subscribe, email, dispatch } = args;

    try {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            '/create_transaction', { 
                Amount: +transactionData.amount,
                OrderId: String(transactionData.order_id),
                Description: subscribe.description,
                CustomerKey: transactionData.user_id,
                Email: email,
                Items: [
                    {
                        name: subscribe.name,
                        price: +transactionData.amount,
                        quantity: 1,
                        amount: +transactionData.amount
                    }
                ]
            })
            .then(r => {
                dispatch(changeStatus(1));
                webApp?.openLink(r.data.payment_url);
            });
    } catch (err) {
        dispatch(changeStatus(1));

        console.error(err);
    }
}
