import { useState } from 'react'
import { IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import './Search.css'

const Searcher = ({ setInputUser }) => {
  const [valueInput, setValueInput] = useState('')

  const handleSubmit = () => {
    setInputUser(valueInput)
  }

  const onSearchValueChange = (e) => {
    setValueInput(e.target.value)
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
        onChange={onSearchValueChange}
        value={valueInput}
      />
      <IconButton
        className='Searcher'
        type='button'
        sx={{
          p: '10px',
          left: '-38px',
        }}
        onClick={handleSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  )
}

export { Searcher }

