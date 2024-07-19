import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface TaskBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    isFault: boolean,
	taskText: string,
    answer: string,
    setAnswer: (e: string) => void,
	handleKeyPress: (e: any) => void,
}
