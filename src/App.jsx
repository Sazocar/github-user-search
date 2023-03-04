import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { Searcher } from './components/Searcher'
import { UserCard } from './containers/UserCard'
import { getGithubUser } from './services/users'
import { Footer } from './components/Footer'
import { toast, Toaster } from 'react-hot-toast'
import './App.css'

function App() {
  const [inputUser, setInputUser] = useState('octocat')
  const [userState, setUserState] = useState(inputUser)
  const [notFound, setNotFound] = useState(false)

  const getUser = async (user) => {
    const userResponse = await getGithubUser(user)

    if (userState === 'octocat') {
      localStorage.setItem('octocat', userResponse)
    }

    if (userResponse.message === 'Not Found') {
      const { octocat } = localStorage
      setInputUser('octocat')
      setNotFound(true)
      toast.error('User not found')
    } else {
      setUserState(userResponse)
    }
  }

  console.log(userState)

  useEffect(() => {
    getUser(inputUser)
  }, [inputUser])

  return (
    <>
      <Searcher setInputUser={setInputUser} />
      <Container
        sx={{
          background: 'whitesmoke',
          width: '80vw',
          minHeight: '400px',
          borderRadius: '16px',
          marginTop: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <UserCard userState={userState} />
      </Container>
      <Footer />
      <Toaster />
    </>
  )
}

export default App
