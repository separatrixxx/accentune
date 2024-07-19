import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
	icon?: string,
    text?: string,
    description?: string,
    isActive?: boolean,
	onClick?: (e: any) => void,
}
