import { Navbar } from '@mfe/shared'
import { Layout, Page, Text, Code, Link } from '@vercel/examples-ui'

export default function About(): React.ReactNode {
  return (
    <Page>
      <Navbar />
      <Text variant="h1" className="mb-6">
        SHELL/PAGES/ABOUT
      </Text>
    </Page>
  )
}

About.Layout = Layout
