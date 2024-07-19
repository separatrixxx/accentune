import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	text: string,
	value: string,
	onChange: (e: any) => void,
	onKeyPress: (e: any) => void,
}
