import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface VariantStatsBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    date: string,
    index: number,
}
