import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { LabeledProps } from './types';
import Chip from '@mui/joy/Chip';

export const Labeled = ({ actor: user, created_at, label }: LabeledProps) => {

    return (
        <Stack direction="row" spacing={2}>
            <Avatar size="sm" variant="solid" src={user?.avatar_url} />
            <Box>
                <Stack direction="row" spacing={2} sx={{ mb: 0.25 }}>
                    <Typography level="body-xs" fontWeight="bold">
                        {user?.login}
                    </Typography>
                    <Typography level="body-xs">
                        added the <Chip
                            sx={{ backgroundColor: `#${label?.color}`, typography: "body-xs", color: 'neutral.800' }}
                        >{label?.name}</Chip> label on  {created_at}
                    </Typography>
                </Stack>
            </Box>
        </Stack>
    );
}