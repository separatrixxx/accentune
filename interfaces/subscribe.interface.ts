export interface SubscribeInterface {
    status: number,
    multiplayer: SubscribeItemInterface[],
    group: SubscribeItemInterface[],
}

export interface SubscribeItemInterface {
    id: number,
    name: string,
    description: string,
    amount: number,
    duration: number,
    subscription_type: 'multiplayer' | 'group',
}

export interface TransactionData {
    user_id: string,
    price_id: number,
    order_id: number,
    status: string,
    amount: string,
    created_at: string,
    updated_at: string,
}
