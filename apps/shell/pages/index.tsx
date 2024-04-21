import { Layout, Page, Text, Code, Link } from '@vercel/examples-ui'
import { Button, matchingTextColor, Navbar, randomColor } from '@mfe/shared'
import axios, { HttpStatusCode } from 'axios'
import { useEffect, useState } from 'react'
// import { matchingTextColor, randomColor } from '@mfe/shared/utils/colors'

type User = {
  name: string
}
export default function Index() {
  const [user, setUser] = useState<User>()
  const [bgColor, setBgColor] = useState('')
  const [textColor, setTextColor] = useState('')

  const changeColor = () => {
    const bg = randomColor()
    setBgColor(bg)
    setTextColor(matchingTextColor(bg))
  }

  useEffect(changeColor, [])

  const login = async () => {
    const res = await axios.post(
      'http://localhost:3002/auth',
      {},
      {
        withCredentials: true,
      }
    )

    const user = await res.data
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  const logout = async () => {
    const res = await axios.delete('http://localhost:3002/auth', {
      withCredentials: true,
    })

    if (res.status === HttpStatusCode.Ok) {
      localStorage.removeItem('user')
      setUser(undefined)
    }
  }

  useEffect(() => {
    const userStorage = localStorage.getItem('user')
    if (userStorage) {
      const user = JSON.parse(userStorage)
      setUser(user)
    }
  }, [setUser])

  return (
    <Page>
      <Navbar />
      <Text variant="h1" className="mb-6">
        SHELL/PAGES/INDEX
      </Text>

      {!user && (
        <>
          <Button className="mb-4" onClick={login}>
            ENTRAR
          </Button>
        </>
      )}
      {user && (
        <>
          <Text variant="h1" className="mb-6">
            Olá {user.name}
          </Text>
          <Button className="mb-4" onClick={logout}>
            SAIR
          </Button>
        </>
      )}

      <Button
        className="mb-4"
        style={{
          backgroundColor: bgColor,
          color: textColor,
          borderColor: textColor,
        }}
        onClick={changeColor}
      >
        Change Color!
      </Button>
    </Page>
  )
}

Index.Layout = Layout
