import {type UserRole} from '@/shared/const/user';

export type User = {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    jwt: string;
};

export type UserSchema = {
    authData?: User;
    _inited: boolean;
};
