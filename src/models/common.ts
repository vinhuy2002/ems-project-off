export interface LoginResponse {
    token: string;
    refresh_token: string;
    [key: string]: any;
}

export interface Account {
    username: string;
    password: string;
}

export interface UserInfo {
    id: string;
    name?: string;
    first_name?: string;
    last_name?: string;
    authority?: string;
    customer_id?: string;
    tenant_id?: string;
    email?: string;
    status?: 'enabled' | 'disable';
    created_ts?: number;
}