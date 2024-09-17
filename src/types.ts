import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

export type UriContextType = {
    uri: string;
    setUri: Dispatch<SetStateAction<string>>;
    comments: UseInfiniteQueryResult<Comment[], any>
}

export type User = {
    login: string;
    avatar_url: string;
};

export type Issue = {
    id: number;
    created_at: string;
    user: User;

    number: number;
    title: string;
    body: string;
    comments_url: string;
};

export type Comment = {
    id: number;
    created_at: string;
    user: User;

    body: string;
};
export interface UserWithCommentCount extends User {
    commentCount: number;
};

export type MessagesPaneProps = {
    issue: UseInfiniteQueryResult<Issue, any>;
    comments: UseInfiniteQueryResult<Comment[], any>;
};
export type UserItemProps = {
    user: UserWithCommentCount;
}