import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { UnknownAction } from '@reduxjs/toolkit';
import { Blocks } from '../../../interfaces/firstPart.interface';


export interface BlockListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    blocks: Blocks,
    chooseBlockId: (e: string) => UnknownAction,
    chooseBlockName: (e: string) => UnknownAction,
}
