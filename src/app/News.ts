import { Comment } from "./Comment";

export interface News {
    id?: number;
    title: string;
    date?: string;
    details: string;
    image?: string;
    comment?: Comment[];
}