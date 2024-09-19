import Chip from "@mui/joy/Chip";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import ChatBubble from "./ChatBubble";
import { TimelineEventType, timelineEventTypes } from "./const";
import { UriContextType } from "./types";
import { useContext } from "react";
import UriContext from "./UriContext";
import TimelineItem from "./TimelineItem";
import Skeleton from "@mui/joy/Skeleton";

export default function MessagesPane() {
  const { issue, timelineEvents }: UriContextType = useContext(UriContext);

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
        {issue?.data ? (
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
        ) : (
          <>
            <Typography level="body-sm">
              <Skeleton>Lorem ipsum is placeholder text commonly used</Skeleton>
            </Typography>
          </>
        )}
      </Stack>
      {timelineEvents?.data && issue?.data ? (
        <Stack spacing={2} justifyContent="flex-end" px={2} py={3}>
          <ChatBubble {...issue?.data} />
          {timelineEvents.data
            .filter((timelineEvent) => timelineEventTypes.includes(timelineEvent.event as TimelineEventType))
            .map((timelineEvent, index) => (
              <TimelineItem key={index} {...timelineEvent} />
            ))}
        </Stack>
      ) : (
        <Stack sx={{ height: "inherit" }} spacing={2} justifyContent="flex-end" px={2} py={3}>
          <Skeleton sx={{ position: "relative" }}>Lorem ipsum is placeholder text commonly used</Skeleton>
        </Stack>
      )}
    </Sheet>
  );
}
