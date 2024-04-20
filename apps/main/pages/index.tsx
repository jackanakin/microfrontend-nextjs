import { Layout, Page, Text, Code, Link } from '@vercel/examples-ui'
import Navbar from '@acme/pages/components/navbar'
import { Button } from '@acme/design-system'
import axios, { HttpStatusCode } from 'axios'
import { useEffect, useState } from 'react'

type User = {
  name: string
}
export default function Index() {
  const [user, setUser] = useState<User>()

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
      <Navbar isDocsApp />

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
    </Page>
  )
}

Index.Layout = Layout
