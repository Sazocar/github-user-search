import { Stack, Typography } from '@mui/material'

const PrincipalInformation = ({ userState }) => {
  const { name, login, created_at } = userState

  return (
    <>
      <Stack
        justifyContent='space-between'
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 1, sm: 3, md: 4 }}
      >
        <Typography className='User-name' variant='h4'>{name}</Typography>
        <Typography>Joined on {new Date(created_at).toLocaleDateString('en-us')}</Typography>
      </Stack>
      <Typography variant='subtitle1'>{login}</Typography>
    </>
  )
}

export { PrincipalInformation }

