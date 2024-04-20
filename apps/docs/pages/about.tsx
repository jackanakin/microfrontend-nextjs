import { Layout, Page, Text, Code, Link } from '@vercel/examples-ui'
import Navbar from '@acme/pages/components/navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from '@mfe/shared'

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
      <Navbar isDocsApp />
      <Text variant="h1" className="mb-6">
        other project {user?.name ?? ''}
      </Text>
      <Button className="mb-4" onClick={getHello}>
        HELLO
      </Button>

      <Text className="mb-4">
        This is the about page in the docs app (
        <Code>apps/docs/pages/about.tsx</Code>).
      </Text>
      <Text>
        Navigations between <Link href="/">Docs</Link> and{' '}
        <Link href="/about">About Docs</Link> are client-side transitions
        because they&apos;re part of the same Next.js app. Navigating to{' '}
        <a
          className="text-link hover:text-link-light transition-colors"
          href="/"
        >
          Home (Multi Zones)
        </a>{' '}
        requires a page refresh because it lives in a different Next.js app.
      </Text>
    </Page>
  )
}

About.Layout = Layout
