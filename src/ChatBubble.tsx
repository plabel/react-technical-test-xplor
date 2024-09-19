import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { ChatBubbleProps, UriContextType } from "./types";
import { useContext } from "react";
import Avatar from "@mui/joy/Avatar";
import UriContext from "./UriContext";
import StyledMarkdown from "./StyledMarkdown";

export default function ChatBubble({ body, created_at, user }: ChatBubbleProps) {
  const { issue }: UriContextType = useContext(UriContext);
  const variant: "outlined" | "soft" = user.login === issue?.data!.user.login ? "soft" : "outlined";

  return (
    <Stack direction="row" spacing={2}>
      <Avatar size="sm" variant="solid" src={user.avatar_url} />
      <Box>
        <Stack direction="row" spacing={2} sx={{ mb: 0.25 }}>
          <Typography level="body-xs" fontWeight="bold">
            {user.login}
          </Typography>
          <Typography level="body-xs">commented on {created_at}</Typography>
        </Stack>
        <Box>
          <Sheet
            color="primary"
            variant={variant}
            invertedColors={variant === "soft"}
            sx={{
              p: 1.25,
              borderRadius: "lg",
              borderTopLeftRadius: 0,
            }}
          >
            <StyledMarkdown
              sx={{
                typography: "body-sm",
                color: "text.primary",
                pre: {
                  bgcolor: "neutral.500",
                  borderRadius: 4,
                },
                blockquote: {
                  borderLeftStyle: "solid",
                  borderLeftWidth: 4,
                  borderLeftColor: "neutral.700",
                  color: "neutral.700",
                  paddingLeft: 2,
                },
                code: {
                  color: "neutral.50",
                  bgcolor: "neutral.500",
                  borderRadius: 2,
                  paddingY: "1px",
                  paddingX: "2px",
                },
              }}
            >
              {body}
            </StyledMarkdown>
          </Sheet>
        </Box>
      </Box>
    </Stack>
  );
}
