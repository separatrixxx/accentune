import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TaskItem } from '../../../interfaces/solved.interface';


export interface VariantStatsItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    item: TaskItem,
}
