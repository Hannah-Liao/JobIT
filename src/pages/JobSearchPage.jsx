import {
  Grid,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  Box,
  IconButton,
  Pagination,
  CircularProgress
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchBarValue } from '../slice/searchBar';
import { useGetSearchQuery } from '../services/JSearch';
import { JobCard, SearchBar, FilterSideBar, NotFound } from '../components';
import icons from '../assets/icons';
import { placeholder } from '../assets/images';
import getDate from '../Utils/getDate';

const JobSearchPage = () => {
  const date = getDate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { title, jobLocation, jobType, experience, isRemote } = useSelector(
    state => {
      return state.searchBar;
    }
  );

  useEffect(() => {
    dispatch(
      setSearchBarValue({
        currentPage: 1,
        title,
        jobLocation,
        jobType,
        experience,
        isRemote
      })
    );
  }, [page]);

  const { data, isError, isFetching } = useGetSearchQuery({
    name: `${title},${jobLocation}`,
    employmentTypes: jobType,
    currentPage: page,
    experience,
    isRemote
  });

  if (isError) return <NotFound />;

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Typography variant='h1' mb='12px'>
          Let’s find your dream job
        </Typography>
        <Typography variant='h6' color='text.secondary'>
          {date}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <SearchBar />
      </Grid>

      {!isMobile && (
        <Grid item lg={3}>
          <FilterSideBar />
        </Grid>
      )}

      <Grid container item xs={12} lg={9}>
        <Stack
          direction='row'
          justifyContent='space-between'
          sx={{ width: '100%', marginBottom: '10px' }}
        >
          <Box>
            <Typography
              variant={isMobile ? 'bodyM_3' : 'bodyL_2'}
              color='text.natural6'
            >
              Showing:
            </Typography>
            <Typography variant={isMobile ? 'bodyM_2' : 'bodyL'}>
              10 Jobs
            </Typography>
          </Box>

          <Stack direction='row' alignItems='center'>
            {!isMobile && <Typography variant=' bodyM3_2'>Sort by:</Typography>}
            <Typography variant={isMobile ? 'bodyM3_2' : 'bodyM3'}>
              Relevance
            </Typography>
            <img src={icons.cheveron} alt='cheveron' />
          </Stack>
        </Stack>
        {isFetching ? (
          <Box
            sx={{
              width: isMobile ? '100%' : '90%',
              margin: '0 auto',
              height: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <CircularProgress color='primary' />
          </Box>
        ) : (
          data?.data.map((job, i) => (
            <Grid item sm={12} mb='15px' key={i}>
              <JobCard
                delay={i * 100}
                jobDesc={job.job_description}
                actionButton={
                  <IconButton aria-label='settings'>
                    <img src={icons.isMore} alt='isMore' />
                  </IconButton>
                }
                maxSalary={200}
                minSalary={300}
                jobId={job.job_id}
                logo={job.employer_logo ? job.employer_logo : placeholder}
                title={job.job_title}
                btnText={'Apply Now'}
                requiredTech={['PHP', 'LARAVEL', 'JAVASCRIPT', 'REACT']}
                variant={'primaryLighter'}
                companyName={job.employer_name}
                companyAdress={`${job.job_city},${job.job_country}`}
              />
            </Grid>
          ))
        )}

        <Pagination
          count={20}
          color='primary'
          shape='rounded'
          size='large'
          page={page}
          onChange={(e, p) => {
            setPage(p);

            window.scroll(0, 0);
          }}
          sx={{ margin: '20px auto 0px' }}
        />
      </Grid>
    </Grid>
  );
};

export default JobSearchPage;
