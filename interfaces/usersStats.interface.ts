export interface UsersStatsInterface {
    event_name: string,
    tasks_stats: TaskStatsInterface[],
    users_stats: UserStatsInterface[],
}

export interface TaskStatsInterface {
    task_id: string,
    task_type: string,
    task_text: string,
    max_score: number,
    user_results: UserResultsInterface[],
}

export interface UserResultsInterface {
    user_name: string,
    score: number,
}

export interface UserStatsInterface {
    user_name: string,
    tasks: TasksResultsInterface[],
    total_score: number,
}

export interface TasksResultsInterface {
    task_id: string,
    score: number,
}
