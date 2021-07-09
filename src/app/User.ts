import { Comment } from "./Comment";

export interface User {
    id?: number;
    name: string;
    email: string;
    password: string;
    type: string;
}