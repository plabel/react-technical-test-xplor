import Chip from "@mui/joy/Chip";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import ChatBubble from "./ChatBubble";
import { MessagesPaneProps } from "./types";

export default function MessagesPane({
  issue,
  comments
}: MessagesPaneProps) {

  return (
    <Sheet
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.level1",
      }}
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.body",
        }}
        py={{ xs: 2, md: 2 }}
        px={{ xs: 1, md: 2 }}
      >
        {issue.data ? (
          <>
            <Typography
              fontWeight="lg"
              fontSize="lg"
              component="h2"
              noWrap
              endDecorator={
                <Chip
                  variant="outlined"
                  size="sm"
                  color="neutral"
                  sx={{
                    borderRadius: "sm",
                  }}
                >
                  #{issue.data?.number}
                </Chip>
              }
            >
              {issue.data.title}
            </Typography>
            <Typography level="body-sm">{issue.data.user.login}</Typography>
          </>
        ) :
          (<>
            <Typography
              fontWeight="lg"
              fontSize="lg"
              component="h2"
              noWrap
            >
              Issue not Found
            </Typography>
            <Typography level="body-sm">404</Typography>
          </>)
        }
      </Stack>
      {comments.data && (
        <Stack spacing={2} justifyContent="flex-end" px={2} py={3}>
          <ChatBubble variant="soft" {...issue.data!} />
          {comments.data.map((comment) => (
            <ChatBubble
              key={comment.id}
              variant={comment.user.login === issue.data!.user.login ? "soft" : "outlined"}
              {...comment}
            />
          ))}
        </Stack>
      )}
    </Sheet>
  );
}
