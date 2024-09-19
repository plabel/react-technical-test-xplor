import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import Typography from "@mui/joy/Typography";
import { useContext, useMemo } from "react";
import { UriContextType, UserWithCommentCount } from "./types";
import UriContext from "./UriContext";
import UserItem from "./UserItem";
import getUsersCommentCount from "./helpers/getUsersCommentCount";

export default function UserList() {
  const { timelineEvents }: UriContextType = useContext(UriContext);

  const usersDataWithCommentCount: UserWithCommentCount[] = useMemo(
    () => getUsersCommentCount(timelineEvents),
    [timelineEvents],
  );

  return (
    <Box sx={{ width: 300 }}>
      <Typography id="ellipsis-list-demo" level="body-xs" sx={{ textTransform: "uppercase", letterSpacing: "0.15rem" }}>
        Users
      </Typography>
      <List aria-labelledby="ellipsis-list-demo" sx={{ "--ListItemDecorator-size": "56px" }}>
        {usersDataWithCommentCount
          .sort((a, b) => b.commentCount - a.commentCount)
          .map((user: UserWithCommentCount) => (
            <UserItem user={user} key={user.login}></UserItem>
          ))}
      </List>
    </Box>
  );
}
