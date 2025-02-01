import type { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number];

export interface AuthState {
    id: number;
    name: string;
}

export interface LoginProps{
    email: string;
    password: string
}

export interface LoginResponseProps{
    data: {
        seller: {
            id: number;
            contact_person_name: string;
        },
        token: string
    }
    code: number;
    message: string;

}
