import { Avatar, Grid, Stack } from '@mui/material'
import { PrincipalInformation } from '../components/PrincipalInformation'
import { Description } from './Description'

const UserCard = ({ userState }) => {
  const { avatar_url } = userState

  return (
    <Grid
      container
      spacing={4}
      direction={{ xs: 'column', sm: 'row' }}
      sx={{
        marginTop: '12px',
      }}
    >
      <Grid item xs={3} >
        <Avatar
          className='user-avatar'
          src={avatar_url}
          alt='Github user'
          sx={{
            width: '100%',
            height: 'auto',
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack
          spacing={1}
          sx={{ margin: '24px' }}>
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export { UserCard }

