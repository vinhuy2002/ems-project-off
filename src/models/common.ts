export interface LoginResponse {
    access_token: string;
    refresh_token: string;
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

export interface ListParams {
    _page?: number;
    _limit?: number;
    _sort?: string;
    _order?: 'asc' | 'desc';
    [key: string]: any;
  }
  export interface ListResponse<T> {
    data: T[];
    total_elements: number;
    total_pages: number;
    has_next: boolean;
    [key: string]: any;
  }