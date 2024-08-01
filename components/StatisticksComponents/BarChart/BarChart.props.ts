import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ThemeStatsInterface, TypeStatsInterface } from '../../../interfaces/statistics.interface';


export interface BarChartProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    blockId: number,
    data: ThemeStatsInterface[] | TypeStatsInterface[],
    title: string,
}
