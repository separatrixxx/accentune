import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Blocks } from '../../interfaces/firstPart.interface';


export interface FirstPartPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    blocks: Blocks,
}
