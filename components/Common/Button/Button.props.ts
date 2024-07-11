import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
	icon: string,
    text: string,
    description: string,
	onClick?: (e: any) => void,
}
