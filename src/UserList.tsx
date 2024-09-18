
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import Typography from "@mui/joy/Typography";
import { UserItem } from "./UserItem";
import { useContext, useMemo } from "react";
import { UriContext } from "./UriContext";
import { UriContextType, UserWithCommentCount } from "./types";

export const UserList = () => {
    const {
        timelineEvents
    }: UriContextType = useContext(UriContext);

    const usersDataWithCommentCount: UserWithCommentCount[] = useMemo(() => {
        const initialVal: Record<string, UserWithCommentCount> = {};
        const recordOfUsersWithCommentCount: Record<string, UserWithCommentCount> | undefined = timelineEvents.data
            ?.filter((timelineEvent) => timelineEvent.user !== undefined)
            .reduce((acc, current) => {
                if (acc[current.user.login] === undefined) {
                    acc[current.user.login] = {
                        ...current.user,
                        commentCount: 1,
                    } as UserWithCommentCount
                } else {
                    acc[current.user.login].commentCount++;
                }
                return acc
            }, initialVal);
        return Object.values(recordOfUsersWithCommentCount ?? {});
    }, [timelineEvents]);

    return (
        <Box sx={{ width: 300 }}>
            <Typography
                id="ellipsis-list-demo"
                level="body-xs"
                sx={{ textTransform: 'uppercase', letterSpacing: '0.15rem' }}
            >
                Users
            </Typography>
            <List
                aria-labelledby="ellipsis-list-demo"
                sx={{ '--ListItemDecorator-size': '56px' }}
            >
                {
                    usersDataWithCommentCount
                        .sort((a, b) => b.commentCount - a.commentCount)
                        .map((user: UserWithCommentCount) => <UserItem
                            user={user}
                            key={user.login}
                        ></UserItem>)
                }
            </List>
        </Box>
    );
};