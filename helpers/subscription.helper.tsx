import axios, { AxiosResponse } from "axios";
import { getUser } from "./user.helper";
import { SubscribeItemInterface, TransactionData } from "../interfaces/subscribe.interface";
import { setSubscribeMultiplayer, setSubscribeGroup, changeStatus } from "../features/subscribe/subscribeSlice";
import { setLocale } from "./locale.helper";
import { DemoSubscribeArguments, SubscribeArguments } from "../interfaces/refactor.interface";
import { formatDate } from "./date.helper";


export async function demoSubscribe(args: DemoSubscribeArguments) {
    const { userId, text, webApp, router, dispatch, setIsLoading } = args;

    webApp?.showConfirm(text, async function (isOk: boolean) {
        if (isOk && userId) {
            try {
                setIsLoading(true);

                await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
                    '/subscribe_demo?user_id=' + userId).then(() => {
                        getUser({
                            userId: userId,
                            dispatch: dispatch,
                        }).then(() => {
                            setIsLoading(false);
                            webApp.showAlert(setLocale(router.locale).demo_successfully_activated);
                        });
                    });
            } catch (error) {
                webApp?.showAlert(setLocale(router.locale).errors.activate_demo_error, async function() {
                    setIsLoading(false);
                }); 

                console.error(error);
            }
        }
    });
}

export async function getPrices(dispatch: any) {
    try {
        const { data: response }: AxiosResponse<SubscribeItemInterface[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/get_prices_by_type?sub_type=multiplayer');

        dispatch(setSubscribeMultiplayer(response));
    } catch (err) {
        console.error(err);
    }

    try {
        const { data: response }: AxiosResponse<SubscribeItemInterface[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
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

    webApp?.showConfirm(setLocale(router.locale).activate_subscription + '?', async function (isOk: boolean) {
        if (isOk) {
            try {
                dispatch(changeStatus(-1));

                await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
                    `/create_pretransaction?user_id=${userId}&price_id=${subscribe.id}`)
                    .then(r => {
                        createTransaction(args, r.data.transaction_data);
                    });
            } catch (err) {
                webApp?.showAlert(setLocale(router.locale).errors.create_pretransaction_error, async function() {
                    dispatch(changeStatus(1));
                }); 
            
                console.error(err);
            }
        }
    });
}

export async function createTransaction(args: SubscribeArguments, transactionData: TransactionData) {
    const { webApp, subscribe, email, router, dispatch } = args;

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
        webApp?.showAlert(setLocale(router.locale).errors.create_transaction_error, async function() {
            dispatch(changeStatus(1));
        }); 

        console.error(err);
    }
}

export async function cancelSubscribe(args: DemoSubscribeArguments) {
    const { userId, text, webApp, router, dispatch, setIsLoading } = args;

    webApp?.showConfirm(text, async function (isOk: boolean) {
        if (isOk && userId) {
            try {
                setIsLoading(true);

                await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
                    '/cancel_subscription?user_id=' + userId).then(r => {
                        if (r.data && r.data.message) {
                            const message = r.data.message;

                            if (message.indexOf('cancelled immediately') !== -1) {
                                getUser({
                                    userId: userId,
                                    dispatch: dispatch,
                                }).then(() => {
                                    setIsLoading(false);
                                    webApp.showAlert(setLocale(router.locale).subscription_successfully_canceled);
                                });
                            } else {
                                const dateMatch = message.match(/on (\d{4}-\d{2}-\d{2})/);
                                const cancellationDate = dateMatch ? dateMatch[1] : 'неизвестная дата';

                                webApp.showAlert(setLocale(router.locale).subscription_will_be_cancelled_on
                                    .replace('$$$', formatDate(cancellationDate)));

                                setIsLoading(false);
                            }
                        }
                    });
            } catch (error) {
                webApp?.showAlert(setLocale(router.locale).errors.cancel_subscribe_error, async function() {
                    setIsLoading(false);
                }); 

                console.error(error);
            }
        }
    });
}
