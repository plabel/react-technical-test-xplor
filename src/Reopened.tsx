import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { LabeledProps } from "./types";
import AdjustIcon from "@mui/icons-material/Adjust";
import Chip from "@mui/joy/Chip";

export default function Reopened({ actor: user, created_at }: LabeledProps) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar size="sm" variant="solid" src={user?.avatar_url} />
      <Box>
        <Stack direction="row" spacing={2} sx={{ mb: 0.25 }}>
          <Typography level="body-xs" fontWeight="bold">
            {user?.login}
          </Typography>
          <Typography level="body-xs">
            <Chip startDecorator={<AdjustIcon />} color="success">
              reopened
            </Chip>
            this on {created_at}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
