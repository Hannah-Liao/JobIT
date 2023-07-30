import {
  Autocomplete,
  TextField,
  Box,
  Select,
  MenuItem,
  FormControl,
  Stack,
  Divider,
  useTheme,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import icons from '../../assets/icons';
import { CustomButton } from '..';
import { SearchContainer, SearchIconWrapper } from './styles';
import { demoCountries } from '../../constants/index';

// const contactTypes = [
//   { value: 'FULLTIME', lable: 'Full time' },
//   { value: 'PARTTIME', lable: 'Part time' },
//   { value: 'CONTRACTOR', lable: 'Contractor' },
//   { value: 'INTERN', lable: 'Intern' },
// ];

// TASK: Clean the code.

const contactTypes = ['Full time', 'Part time', 'Contractor', 'Intern'];

const SearchBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [contractType, setContractType] = useState('');
  const [location, setLocation] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const handleSearch = () => {
    // TASK: Don't print console logs if the values are all empty i.e., contractType,
    //       location, jobTitle.

    // TASK: if all the values are empty
    //       create an alert or modal telling user that they should provide some input

    const formattedContactType = contractType.replace(/\s+/g, '').toUpperCase();
    console.log(formattedContactType);
    console.log(location.label);
    console.log(jobTitle);

    // fetch call
  };

  return (
    <FormControl
      sx={{
        borderRadius: '10px',
        backgroundColor: 'customColor.jobCardBg',
        width: '100%',
      }}
    >
      <Stack
        direction={isMobile ? 'column' : 'row'}
        justifyContent='center'
        alignItems='center'
        p={2}
        divider={
          <Divider
            orientation={isMobile ? 'horizontal' : 'vertical'}
            flexItem
          />
        }
      >
        <SearchContainer>
          <SearchIconWrapper>
            <img src={icons.search} alt='search' />
          </SearchIconWrapper>
          <TextField
            value={jobTitle}
            onInput={(e) => {
              setJobTitle(e.target.value);
            }}
            placeholder='Job Title, Company, or Keywords'
            sx={{
              width: '100%',
              '& fieldset': { border: 'none' },
              paddingLeft: '2rem',
            }}
          />
        </SearchContainer>

        <SearchContainer>
          <SearchIconWrapper>
            <img src={icons.pin} alt='pin' />
          </SearchIconWrapper>
          <Autocomplete
            sx={{
              width: '100%',
              '& fieldset': { border: 'none' },
              paddingLeft: '2rem',
            }}
            onChange={(e, value) => {
              console.log('autocomplete', value);
              setLocation(value);
            }}
            value={location}
            options={demoCountries}
            autoHighlight
            getOptionLabel={(option) => option.label || ''}
            renderOption={(props, option) => (
              <Box
                component='li'
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading='lazy'
                  width='20'
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=''
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder='Select Location'
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
          />
        </SearchContainer>

        <SearchContainer>
          <SearchIconWrapper>
            <img src={icons.briefcase} alt='briefcase' />
          </SearchIconWrapper>

          <Select
            sx={{
              width: '100%',
              paddingLeft: '2rem',
              '& fieldset': { border: 'none' },
              // textTransform: 'capitalize',
            }}
            displayEmpty
            value={contractType}
            renderValue={(selected) => {
              if (!selected) {
                return <Typography color='text.natural6'>Job Type</Typography>;
              }

              return selected;

              // let correspondingLabel = '';

              // contactTypes.forEach((item) => {
              //   if (item.value === selected) {
              //     return (correspondingLabel = item.lable);
              //   }
              // });

              // return correspondingLabel;
            }}
            onChange={(e) => {
              setContractType(e.target.value);
              console.log(e.target.value);
            }}
          >
            {/* <MenuItem value='fulltime'>Fulltime</MenuItem>
            <MenuItem value='parttime'>Parttime</MenuItem>
            <MenuItem value='contractor'>Contractor</MenuItem>
            <MenuItem value='intern'>intern</MenuItem> */}
            {contactTypes.map((item, i) => (
              <MenuItem value={item} key={i}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </SearchContainer>
        <CustomButton
          variant='primary'
          title='Find Jobs'
          onClick={handleSearch}
          sx={{
            minWidth: { xs: '100%', md: '100px' },
            marginTop: { xs: '10px', md: '0px' },
            marginLeft: { xs: '0px', md: '10px' },
          }}
        />
      </Stack>
    </FormControl>
  );
};

export default SearchBar;
