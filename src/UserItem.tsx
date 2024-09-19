import Avatar from "@mui/joy/Avatar";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import { UserItemProps } from "./types";

export default function UserItem({ user }: UserItemProps) {
  return (
    <ListItem>
      <ListItemDecorator>
        <Avatar src={user.avatar_url} />
      </ListItemDecorator>
      <ListItemContent>
        <Typography level="title-sm">{user.login}</Typography>
        <Typography level="body-sm" noWrap>
          {user.commentCount} comments
        </Typography>
      </ListItemContent>
    </ListItem>
  );
}
