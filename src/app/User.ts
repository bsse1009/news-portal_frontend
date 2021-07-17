import { Comment } from "./Comment";

export interface User {
    id?: string;
    name: string;
    email: string;
    password: string;
    type: string;
}