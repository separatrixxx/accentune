import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FirstPartInterface } from '../../../interfaces/tasks.interface';
import { UnknownAction } from '@reduxjs/toolkit';


export interface SortBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    firstPart?: FirstPartInterface,
    chooseSortName: (e: any) => UnknownAction,
}
