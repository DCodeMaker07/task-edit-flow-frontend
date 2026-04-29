export interface TaskStatsResponse {
    success: boolean;
    data:    StatsResponse;
    message: string;
}

export interface StatsResponse {
    TODO:        number;
    IN_PROGRESS: number;
    IN_REVIEW:   number;
    DONE:        number;
}