import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { MentionedProps } from './types';
import Link from '@mui/joy/Link';
import Chip from '@mui/joy/Chip';
import AdjustIcon from '@mui/icons-material/Adjust';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const Mentioned = ({ actor: user, created_at, source }: MentionedProps) => {
    const sourceState: string | undefined = source?.issue.state;

    return (
        <Stack direction="row" spacing={2}>
            <Avatar size="sm" variant="solid" src={user?.avatar_url} />
            <Box>
                <Stack direction="row" spacing={2} sx={{ mb: 0.25 }}>
                    <Typography level="body-xs" fontWeight="bold">
                        {user?.login}
                    </Typography>
                    <Typography level="body-xs"> mentioned this issue on {created_at}</Typography>
                </Stack>
                <Box>
                    <Chip startDecorator={sourceState === 'closed' ? <CheckCircleOutlineIcon /> : <AdjustIcon />} color={sourceState === 'closed' ? 'danger' : 'success'} >{sourceState}</Chip>
                    <Link
                        component="button"
                    >
                        {source?.issue.title} #{source?.issue.number}
                    </Link>
                </Box>
            </Box>
        </Stack>
    );
}