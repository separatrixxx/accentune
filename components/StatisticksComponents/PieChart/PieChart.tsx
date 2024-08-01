import { PieChartProps } from './PieChart.props';
import styles from './PieChart.module.css';
import { useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { useSetup } from '../../../hooks/useSetup';
import { BlockStatsInterface } from '../../../interfaces/statistics.interface';
import { setLocale } from '../../../helpers/locale.helper';


export const PieChart = ({ setBlockId }: PieChartProps): JSX.Element => {
    const { router, firstStatistics } = useSetup();
    const chartRef = useRef<any>(null);

    const blockStats: BlockStatsInterface[] = firstStatistics.block_stats;

    const data = {
        labels: blockStats.map(block => block.block_name.substring(0, 10)),
        datasets: [
            {
                label: setLocale(router.locale).tasks_solved,
                data: blockStats.map(block => block.solved_task_count),
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                ],
                borderColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    padding: 10,
                },
            },
            tooltip: {
                callbacks: {
                    title: function(context: any) {
                        const block = blockStats[context[0].dataIndex];

                        return block.block_name;
                    },
                    label: function(context: any) {
                        const block = blockStats[context.dataIndex];
                        
                        return setLocale(router.locale).tasks_solved + ": " + block.solved_task_count
                            + ' ' + setLocale(router.locale).of + ' ' + block.total_task_for_block_count;
                    },
                },
            },
        },
        onClick: (_: any, elements: any) => {
            if (elements.length > 0) {
                const index = elements[0].index;
                const blockId = blockStats[index].block_id;
                
                setBlockId(blockId);
            }
        },
        onHover: (event: any, elements: any) => {
            if (elements.length > 0) {
                event.native.target.style.cursor = 'pointer';
            } else {
                event.native.target.style.cursor = 'default';
            }
        },
    };

    return (
        <div className={styles.pieChart}>
            <Doughnut ref={chartRef} data={data} options={options} />
        </div>
    );
};
