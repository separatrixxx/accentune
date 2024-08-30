export interface PromoInterface {
    status: string,
    promos: PromoData[],
};

export interface PromoData {
    promo_id: number,
    photo_url: string,
    redirect_url: string,
};
