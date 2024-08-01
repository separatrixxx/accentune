import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface IconProps extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
	icon: string,
}
