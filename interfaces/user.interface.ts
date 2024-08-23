export type Subject = 'social' | 'math' | 'russian';

export interface UserInterface {
    user_name: string | null,
    email: string | null,
    privileges: "unregistered_user" | "registered_user" | "paid_user" | null,
    user_role: "student" | null,
    tasks_first_part_solved_today: number,
    subscription_type: string | null,
    date_paid_sub_end: string | null,
    first_part_small_stat: {
      solved_task_count: number,
      pts_total: number
    },
    second_part_small_stat: string,
    demo_used: boolean,
}
