import { Navbar } from '@mfe/shared'
import { Layout, Page, Text, Code, Link } from '@vercel/examples-ui'

export default function Index() {
  return (
    <Page>
      <Navbar isDocsApp />
      <Text className="mb-4">DOCS/PAGES/INDEX</Text>
    </Page>
  )
}

Index.Layout = Layout
