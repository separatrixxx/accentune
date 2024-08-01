import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { UnknownAction } from '@reduxjs/toolkit';


export interface TypesBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    chooseSecondTypeId: (e: string) => UnknownAction,
}
