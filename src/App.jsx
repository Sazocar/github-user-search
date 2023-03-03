import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { Searcher } from './components/Searcher'
import { getGithubUser } from './services/users'
import './App.css'

function App() {
  const [inputUser, setInputUser] = useState('octocat')
  const [userState, setUserState] = useState(inputUser)

  const getUser = async (user) => {
    const githubUser = await getGithubUser(user)
    console.log(githubUser)
  }

  useEffect(() => {
    getUser(inputUser)
  }, [])

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
      <Searcher setInputUser={setInputUser} />
    </Container>
  )
}

export default App
