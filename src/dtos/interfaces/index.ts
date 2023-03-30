export interface UserInterface {
    id: number;
    email: string;
    username: string | null;
    password: string;
}

export interface UserReducerDataInterface {
    user: UserInterface | null;
    accessToken: string | null;
    isLoggedIn: boolean;
    loading: boolean;
    error: string | null;
}

export interface LoginRequestInterface {
    email: string;
    password: string;
}

export interface RegisterRequestInterface {
    email: string;
    username: string;
    password: string;
}