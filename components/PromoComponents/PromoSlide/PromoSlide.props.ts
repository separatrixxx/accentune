import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface PromoSlideProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    promoId: number,
    photo: string,
    url: string,
}
