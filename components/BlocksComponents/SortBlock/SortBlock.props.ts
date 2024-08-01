import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { UnknownAction } from '@reduxjs/toolkit';


export interface SortBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    chooseSortId: (e: string) => UnknownAction,
}
