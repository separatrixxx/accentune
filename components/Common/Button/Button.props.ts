import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon?: string,
    text?: string,
    description?: string,
    isActive?: boolean,
	onClick?: (e: any) => void,
}
