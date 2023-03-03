import { IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Searcher = () => {
  const handleSubmit = () => {
    
  }

  return (
    <Stack
      direction='row'
      sx={{
        marginTop: '30px',
        width: '50%',
      }}
    >
      <TextField
        id='filled-hidden-label-normal'
        label='Github username'
        type='search'
        variant='standard'
        placeholder='octocat'
        size='small'
        sx={{
          width: '90%',
        }}
      />
      <IconButton
        type='button'
        sx={{
          p: '10px',
          left: '-38px',
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  )
}

export { Searcher }

