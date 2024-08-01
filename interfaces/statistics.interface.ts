export interface FirstPartStatisticsInterface {
    overall_stats: {
        total_task_count: number,
        solved_task_count: number,
    },
    block_stats: BlockStatsInterface[],
    theme_stats: ThemeStatsInterface[],
    type_stats: TypeStatsInterface[],
}

export interface BlockStatsInterface {
    block_id: number,
    block_name: string,
    solved_task_count: number,
    total_task_for_block_count: number,
}

export interface ThemeStatsInterface {
    block_id: number,
    theme_id: number,
    theme_name: string,
    solved_task_count: number,
    total_task_for_theme_count: number,
}

export interface TypeStatsInterface {
    block_id: number,
    type_id: number,
    total_tasks: number,
    solved_tasks: number,
}
