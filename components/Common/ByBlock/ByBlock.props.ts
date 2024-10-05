import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ByBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color: 'light' | 'dark',
}
