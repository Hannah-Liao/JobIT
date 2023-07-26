import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Stack,
} from '@mui/material';

import demoImg from '../../assets/images/google.png';
import { CustomButton } from '..';
import icons from '../../assets/icons';
const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const InlineJobCard = ({ type }) => {
  const cardType = type === 'homeInlineCard';

  return (
    <Card
      sx={{
        maxWidth: '380px',
        backgroundColor: cardType
          ? 'customColor.requirementBg'
          : 'customColor.jobCardBg',
        padding: '10px ',
        borderRadius: '10px',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px',
        }}
      >
        <Box>
          <img src={demoImg} alt='logo' />
        </Box>

        <Stack spacing={1}>
          <Typography variant={{ xs: 'bodyM2_2', sm: 'bodyM_2' }}>
            Passionate programmer
          </Typography>

          <Typography
            variant={{ xs: 'bodyM4_4', sm: 'bodyM3_4' }}
            color='text.secondary'
          >
            Google{bull}California, USA
          </Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography variant={{ xs: 'bodyM4_2', sm: 'bodyM3_3' }}>
            $70-80
            <Typography
              variant={{ xs: 'bodyM4_4', sm: 'bodyM3_4' }}
              component='span'
              color='text.secondary'
            >
              / Hr
            </Typography>
          </Typography>

          {cardType ? (
            <Typography variant={{ xs: 'bodyM4_4', sm: 'bodyM3_4' }}>
              Full-Time
            </Typography>
          ) : (
            <Box height='18px'></Box>
          )}
        </Stack>
      </CardContent>

      {!cardType && (
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant='bodyL_4' color='text.natural6'>
              5 days left
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: '10px' }}>
            <CustomButton
              variant='secondaryOutlined'
              title={<img src={icons.archive} alt='archive' />}
              sx={{ minWidth: '18px' }}
            />

            <CustomButton variant='primaryLighter' title='View' />
          </Box>
        </CardActions>
      )}
    </Card>
  );
};

export default InlineJobCard;
