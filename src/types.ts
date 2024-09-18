import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

export type UriContextType = {
    uri: string;
    setUri: Dispatch<SetStateAction<string>>;
    timelineEvents: UseInfiniteQueryResult<TimelineEvent[], any>;
    issue: UseInfiniteQueryResult<Issue, any>;
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
    timeline_url: string;
};

export type TimelineItemProps = {
    created_at: string;
    event: string;
    user: User;

    body: string;
}

export type TimelineEvent = {
    id: number;
    created_at: string;
    event: string;
    user: User;

    body: string;
};
export interface UserWithCommentCount extends User {
    commentCount: number;
};
export type ChatBubbleProps = {
    body: string;
    created_at: string;
    user: User;
};

export type MessagesPaneProps = {
    issue: UseInfiniteQueryResult<Issue, any>;
    timelineEvents: UseInfiniteQueryResult<TimelineEvent[], any>;
};
export type UserItemProps = {
    user: UserWithCommentCount;
}
export type MentionedProps = {
    actor?: User;
    created_at: string;
    source?: {
        issue: {
            state: string;
            title: string;
            number: number;
        }
    }
}
export type LabeledProps = {
    actor?: User;
    created_at: string;
    label?: {
        name: string;
        color: string;
    }
}