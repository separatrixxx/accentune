import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface PieChartProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setBlockId: (e: number) => void,
}
