import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { SolvedInterface } from '../../../interfaces/solved.interface';


export interface DateIndexSelectProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    solved: SolvedInterface,
    date: null | string,
    setDate: (e: null | string) => void,
    setIndex: (e: null | number) => void,
}
