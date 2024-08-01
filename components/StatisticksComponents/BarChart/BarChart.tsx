import { BarChartProps } from './BarChart.props';
import styles from './BarChart.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { setLocale } from '../../../helpers/locale.helper';


export const BarChart = ({ blockId, data, title }: BarChartProps): JSX.Element => {
    const { router } = useSetup();

    const filteredData = data.filter(item => item.block_id === blockId);

    const chartData = {
        labels: filteredData.map(item => 'theme_name' in item ? item.theme_id + ' '
            + item.theme_name.substring(0, 7) : setLocale(router.locale).type + ' ' + item.type_id),
        datasets: [
            {
                label: setLocale(router.locale).tasks_solved,
                data: filteredData.map(item => 'theme_name' in item ? item.solved_task_count : item.solved_tasks),
                backgroundColor: 'rgba(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235)',
                borderWidth: 1,
            },
            {
                label: setLocale(router.locale).tasks_left,
                data: filteredData.map(item => 'theme_name' in item
                    ? item.total_task_for_theme_count - item.solved_task_count : item.total_tasks - item.solved_tasks),
                backgroundColor: 'rgba(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: title,
            },
            tooltip: {
                callbacks: {
                    label: function(context: any) {
                        const datasetLabel = context.dataset.label;
                        const value = context.raw;

                        if (datasetLabel === setLocale(router.locale).tasks_solved) {
                            return setLocale(router.locale).tasks_solved + ': ' + value;
                        } else if (datasetLabel === setLocale(router.locale).tasks_left) {
                            return setLocale(router.locale).tasks_left + ': ' + value;
                        }

                        return '';
                    },
                    title: function(context: any) {
                        const item = filteredData[context[0].dataIndex];
                        
                        return 'theme_name' in item ? item.theme_id + ' ' + item.theme_name.substring(0, 30)
                            : setLocale(router.locale).type + ' ' + item.type_id;
                    },
                },
            },
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    return (
        <div className={styles.barChart}>
            <Bar data={chartData} options={options} />
        </div>
    );
};
