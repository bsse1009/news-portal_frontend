import { Comment } from "./Comment";

export interface News {
    id?: string;
    title: string;
    date?: string;
    details: string;
    image?: string;
    comment?: Comment[];
}