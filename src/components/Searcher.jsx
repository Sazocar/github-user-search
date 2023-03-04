import { useState } from 'react'
import { IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Searcher = ({ setInputUser }) => {
  const [valueInput, setValueInput] = useState('')

  const handleSubmit = () => {
    setInputUser(valueInput)
    setValueInput('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      setInputUser(valueInput)
      setValueInput('')
    }
  }

  // Make enter button work as well to search the user

  const onSearchValueChange = (e) => {
    setValueInput(e.target.value)
  }

  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignContent='center'
      sx={{
        marginTop: '46px',
        width: '100%',
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
          width: '50%',
        }}
        onChange={onSearchValueChange}
        value={valueInput}
        onKeyDown={handleKeyDown}
      />
      <IconButton
        className='Searcher'
        type='button'
        sx={{
          p: '10px',
        }}
        onClick={handleSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  )
}

export { Searcher }

