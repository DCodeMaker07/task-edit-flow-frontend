export interface LoginResponse {
    success: boolean;
    data:    Data;
    message: string;
}

export interface Data {
    id:           string;
    email:        string;
    name:         string;
    role:         string;
    avatarUrl:    null;
    access_token: string;
}
