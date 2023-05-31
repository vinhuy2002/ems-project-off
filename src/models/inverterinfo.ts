export interface inverterInfo {
    code: string;
    id: string;
    label: string;
    type?: string;
    location?: string;
    gateway?: string;
    active?: boolean;
    installation_date: number;
    created_time?: number;
    last_activity_time?: number;
    last_connect_time?: number;
    last_disconnect_time?: number;
    model: string;
    serial_number?: string;
    label_plant?: string;
    access_token?: string;
  }