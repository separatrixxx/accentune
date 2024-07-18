export type Subject = 'social' | 'math' | 'russian';

export interface UserInterface {
    isSubscriptionActive: boolean,
    subject: Subject,
}
