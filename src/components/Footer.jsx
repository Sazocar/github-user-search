import { Stack, Typography } from '@mui/material'

const apiUrl = 'https://docs.github.com/en/rest/users?fl_rand_seed=2951590'
const profilePage = 'https://github.com/Sazocar'

const Footer = () => {
  return (
    <Stack
      sx={{
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}
    >
      <Typography variant='caption'>
        Powered by{' '}
        <a target='__blank' href={apiUrl}>
          Github API
        </a>{' '}
        | Made by{' '}
        <a target='__blank' href={profilePage}>
          Sazocar
        </a>{' '}
        on Github
      </Typography>
    </Stack>
  )
}

export { Footer }

