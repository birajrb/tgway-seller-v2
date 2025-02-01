import type { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number];

export interface AuthState {
    role: string;
    id: number;
    firstName: string;
    lastName: string;
}

export interface LoginProps{
    email: string;
    password: string
}

export interface LoginResponseProps{
    data: {
        user: {
            role: string;
            id: number;
            first_name: string;
            last_name: string
        },
        token: string
    }
}
