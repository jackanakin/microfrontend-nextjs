import type { FC } from 'react'

const Navbar: FC<{ isRemote?: boolean }> = ({ isRemote }) =>
  isRemote ? (
    <>
      <span>THIS IS REMOTE1</span>
      <div></div>
      <ul className="inline-flex mb-4">
        <li>
          <a href="/remote1">INDEX</a>
        </li>
        <li className="ml-4">
          <a href="/remote1/about">REMOTE1 ABOUT</a>
        </li>
        <li className="ml-4">
          <a href="/">SHELL INDEX</a>
        </li>
      </ul>
    </>
  ) : (
    <>
      <span>THIS IS SHELL</span>
      <div></div>
      <ul className="inline-flex mb-4">
        <li>
          <a href="/">INDEX</a>
        </li>
        <li className="ml-4">
          <a href="/about">SHELL ABOUT</a>
        </li>
        <li className="ml-4">
          <a href="/remote1">REMOTE1 INDEX</a>
        </li>
      </ul>
    </>
  )

export default Navbar
