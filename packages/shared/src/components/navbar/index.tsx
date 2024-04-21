import type { FC } from 'react'

const Navbar: FC<{ isDocsApp?: boolean }> = ({ isDocsApp }) =>
  isDocsApp ? (
    <>
      <span>THIS IS DOCS</span>
      <div></div>
      <ul className="inline-flex mb-4">
        <li>
          <a href="/docs">INDEX</a>
        </li>
        <li className="ml-4">
          <a href="/docs/about">DOCS ABOUT</a>
        </li>
        <li className="ml-4">
          <a href="/">MAIN INDEX</a>
        </li>
      </ul>
    </>
  ) : (
    <>
      <span>THIS IS MAIN</span>
      <div></div>
      <ul className="inline-flex mb-4">
        <li>
          <a href="/">INDEX</a>
        </li>
        <li className="ml-4">
          <a href="/about">MAIN ABOUT</a>
        </li>
        <li className="ml-4">
          <a href="/docs">DOCS INDEX</a>
        </li>
      </ul>
    </>
  )

export default Navbar
