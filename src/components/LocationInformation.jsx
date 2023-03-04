import { createTheme, Grid, Stack, ThemeProvider, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import TwitterIcon from '@mui/icons-material/Twitter'
import LanguageIcon from '@mui/icons-material/Language'
import BusinessIcon from '@mui/icons-material/Business'

const LocationInformation = ({ userState }) => {

  const theme = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontSize: '0.8rem',
          },
        },
      },
    },
  });

  const { location, twitter_username, blog, company } = userState

  return (
    <Grid
      container
      alignContent='center'
      spacing={{ xs: 1, sm: 3, md: 4 }}
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Grid item xs={6}>
        <Stack direction='row' spacing={1}>
          <LocationOnIcon />
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={1}>
          <TwitterIcon />
          <Typography>
            {twitter_username ? `@${twitter_username}` : 'Not Available'}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={1} alignItems='center'>
          <LanguageIcon />
          <ThemeProvider theme={theme}>
            <Typography className='blog'>
              {blog ? (
                <a target='__blank' href={blog}>
                  {blog}
                </a>
              ) : (
                'Not Available'
              )}
            </Typography>
          </ThemeProvider>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={1}>
          <BusinessIcon />
          <Typography>{company ? `${company}` : 'Not Available'}</Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}

export { LocationInformation }
