import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Box
} from '@mui/material';
import { Link } from 'react-router-dom';

import { fadeIn } from '../SimilarCompany/style';
import { CustomButton } from '..';
import icons from '../../assets/icons';
import { placeholder } from '../../assets/images';
import { formatCurrency } from '../../Utils/numberFormat';

const JobCard = props => {
  const {
    requiredTech = [],
    title,
    actionButton,
    type,
    variant,
    logo,
    jobDesc,
    delay,
    jobId,
    sinceLeft,
    salary,
    btnText,
    currency,
    period,
    companyName,
    companyAdress
  } = props;

  const slicedRequiredtech = (requiredTech && requiredTech.slice(0, 3)) || [];
  const shouldRenderTechButtons = !!(
    type === 'homeJobcard' || type === 'companyDetail'
  );

  const salaries = formatCurrency(salary?.min, salary?.max, currency);
  // const techLength = slicedRequiredtech.map(tech => tech.split(' ').length);

  return (
    <Card
      sx={theme => ({
        padding: '1.25rem',
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        opacity: '0',
        borderRadius: '15px',
        transition: 'opacity 500ms ease',
        animation: `${fadeIn} 1s linear ${delay}ms forwards`,
        backgroundColor: 'customColor.jobCardBg',
        boxShadow:
          theme.palette.mode === 'light'
            ? '0px 23px 30px 0px rgba(226, 226, 234, 0.40), -3px -2px 24px 0px rgba(0, 0, 0, 0.02)'
            : 'none'
      })}
    >
      <CardHeader
        id='header'
        sx={{
          paddingBottom: '30px !important',
          '&.MuiCardHeader-root': {
            padding: '0'
          },
          overflow: 'hidden',
          flexDirection: {
            sm: 'row',
            xs: 'column'
          },
          alignItems: {
            xs: 'start'
          }
        }}
        avatar={
          <Link to={`/company/${companyName}`}>
            <img
              onError={e => (e.target.src = placeholder)}
              loading='lazy'
              src={logo ?? placeholder}
              alt='logo'
              style={{
                backgroundColor: 'rgba(23, 23, 37, 0.06)',
                objectFit: 'inherit',
                borderRadius: '5px',
                maxWidth: '46px',
                height: '46px',
                aspectRatio: '1/1',
                padding: '5px',
                marginTop: '10px'
              }}
            />
          </Link>
        }
        title={
          <Typography
            color='text.primary'
            sx={{
              typography: {
                xs: 'bodyM_2',
                lg: 'bodyL_2'
              },
              paddingTop: '1px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              maxWidth: {
                xs: '200px',
                md: '250px'
              }
            }}
          >
            {title}
          </Typography>
        }
        subheader={
          shouldRenderTechButtons ? (
            slicedRequiredtech?.map((tech, i) => (
              <CustomButton
                sx={{
                  marginX: '2px',
                  maxWidth: '40px',
                  direction: 'ltr',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  textAlign: 'center !important',
                  padding: '5px',
                  display: tech.length > 15 ? 'inline-block' : 'inline',
                  whiteSpace: 'nowrap',
                  fontSize: '10px',
                  ':hover': {
                    color: 'text.primary'
                  }
                }}
                variant='small'
                title={tech}
                key={i}
              />
            ))
          ) : (
            <Typography variant='bodyM4_3' color='text.secondary'>
              {companyName} <img src={icons.oval1} alt='oval gray icon' />{' '}
              {companyAdress} <img src={icons.oval1} alt='oval gray icon' /> 3
              days ago
            </Typography>
          )
        }
        action={actionButton}
      />
      <CardContent
        sx={{
          maxHeight: '100%',
          '&.MuiCardContent-root': {
            padding: '0'
          }
        }}
      >
        <Typography
          paragraph
          variant=' bodyM_4'
          color='text.secondary'
          sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'wrap',
            maxHeight: type === 'homeJobcard' ? '142px' : '71px',
            height: '100%'
          }}
        >
          {jobDesc}
        </Typography>
      </CardContent>
      {type === 'homeJobcard' && (
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '30px'
          }}
        >
          <CustomButton
            variant='small'
            title='Full time'
            sx={{
              maxWidth: '80px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              textAlign: 'left',
              padding: '5px 10px',
              whiteSpace: 'nowrap',
              fontSize: '10px'
            }}
            startIcon={<img src={icons.briefcase} alt='briefcase' />}
          />
          <CustomButton
            variant='small'
            title='45 applied'
            sx={{
              maxWidth: '80px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              textAlign: 'left',
              padding: '5px 10px',
              whiteSpace: 'nowrap',
              fontSize: '10px'
            }}
            startIcon={<img src={icons.people} alt='people' />}
          />
          <CustomButton
            variant='small'
            title={sinceLeft}
            sx={{
              maxWidth: '80px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              textAlign: 'left',
              padding: '5px 10px',
              whiteSpace: 'nowrap',
              fontSize: '10px'
            }}
            startIcon={<img src={icons.clock} alt='clock' />}
          />
        </CardContent>
      )}
      {!shouldRenderTechButtons && (
        <CardContent
          sx={{
            paddingTop: '30px'
          }}
        >
          {slicedRequiredtech?.map((tech, i) => (
            <CustomButton
              variant='small'
              title={tech}
              key={i}
              sx={{
                margin: '3px',
                ':hover': {
                  color: 'text.primary'
                }
              }}
            />
          ))}
        </CardContent>
      )}
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '1.38rem',
          flexWrap: 'wrap',
          gap: '1.88rem',
          '&.MuiCardActions-root ': {
            padding: '0'
          }
        }}
      >
        <Box sx={{ display: 'flex', gap: '38px' }}>
          <Typography variant='bodyM'>
            {salaries?.min && salaries?.max
              ? `${salaries.min} - ${salaries.max}`
              : salaries}
            {period && salaries.min && salaries.max && (
              <Typography
                sx={{
                  typography: 'bodyM'
                }}
                component='span'
                color='text.secondary'
              >
                /{period.toLowerCase()}
              </Typography>
            )}
          </Typography>

          {!shouldRenderTechButtons && (
            <Typography
              variant='bodyL_2'
              sx={{
                width: {
                  xs: '100px',
                  sm: '100%'
                },
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap'
              }}
            >
              54{' '}
              <Typography
                component='span'
                color='text.secondary'
                sx={{
                  typography: {
                    xs: 'bodyM_3',
                    sm: 'bodyL_3'
                  }
                }}
              >
                People Applied
              </Typography>
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            width: {
              xs: '100%',
              sm: 'auto'
            }
          }}
        >
          {!shouldRenderTechButtons && (
            <CustomButton
              sx={{
                width: {
                  xs: '100%',
                  sm: 'auto'
                }
              }}
              variant='secondary'
              title='Message'
            />
          )}
          <CustomButton
            sx={{
              width: {
                xs: '100%',
                sm: 'auto'
              }
            }}
            href={`/job/${jobId}`}
            variant={variant}
            title={btnText}
          />
        </Box>
      </CardActions>
    </Card>
  );
};

export default JobCard;
