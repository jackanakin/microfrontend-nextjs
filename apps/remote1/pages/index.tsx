import { Navbar } from '@mfe/shared'
import { Layout, Page, Text, Code, Link } from '@vercel/examples-ui'

export default function Index() {
  return (
    <Page>
      <Navbar isRemote />
      <Text className="mb-4">REMOTE1/PAGES/INDEX</Text>
    </Page>
  )
}

Index.Layout = Layout
