import { Stack, Typography } from '@mui/material'
import { PaperInformation } from '../components/PaperInformation'
import { LocationInformation } from '../components/LocationInformation'

const Description = ({ userState }) => {
  const { bio } = userState
  return (
    <>
      <Stack>
        {bio ? (<Typography>{bio}</Typography>) : (<Typography>No biography</Typography>)}
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </>
  )
}

export { Description }
