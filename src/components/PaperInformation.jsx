import { Divider, Paper, Stack, Typography } from '@mui/material'

const PaperInformation = ({ userState }) => {
  const { public_repos, followers, following } = userState

  return (
    <Paper elevation={3}>
      <Stack
        sx={{ py: 2 }}
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 1, md: 4 }}
        justifyContent='space-evenly'
        alignItems='center'
        divider={<Divider orientation='vertical' flexItem />}
      >
        <Stack justifyContent='center' alignItems='center'>
          <Typography>Repositories</Typography>
          <Typography>{public_repos}</Typography>
        </Stack>
        <Stack justifyContent='center' alignItems='center'>
          <Typography>Followers</Typography>
          <Typography>{followers}</Typography>
        </Stack>
        <Stack justifyContent='center' alignItems='center'>
          <Typography>Following</Typography>
          <Typography>{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}

export { PaperInformation }

