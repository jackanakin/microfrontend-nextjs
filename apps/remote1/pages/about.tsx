import { Layout, Page, Text, Code, Link } from '@vercel/examples-ui'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Navbar } from '@mfe/shared'

type User = {
  name: string
}
export default function About() {
  const [user, setUser] = useState<User>()

  const getHello = async () => {
    const res = await axios.get('http://localhost:3002', {
      withCredentials: true,
      baseURL: 'http://localhost:3002',
    })

    const data = await res.data

    alert(data)
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
      <Navbar isRemote />
      <Text className="mb-4">
        REMOTE1/PAGES/ABOUT
      </Text>
      <Text variant="h1" className="mb-6">
        other project {user?.name ?? ''}
      </Text>
      <Button className="mb-4" onClick={getHello}>
        HELLO
      </Button>
    </Page>
  )
}

About.Layout = Layout
