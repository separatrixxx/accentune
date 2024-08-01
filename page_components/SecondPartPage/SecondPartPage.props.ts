import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Blocks } from '../../interfaces/firstPart.interface';


export interface SecondPartPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    blocks: Blocks,
}
