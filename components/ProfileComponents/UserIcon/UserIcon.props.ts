import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface UserIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
	isHeader?: boolean,
}
