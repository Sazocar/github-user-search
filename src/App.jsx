import { useState } from 'react'
import { Container } from '@mui/material'
import { Searcher } from './components/Searcher'
import './App.css'

function App() {
  const [inputUser, setInputUser] = useState('octocat')
  const [userState, setUserState] = useState(inputUser)

  return (
    <Container
      sx={{
        background: 'whitesmoke',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
  )
}

export default App



