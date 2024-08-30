import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface PromoSlideProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    photo: string,
    url: string,
}
