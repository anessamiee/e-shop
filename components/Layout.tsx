import Meta from './Meta'
import Nav from './nav/Nav'
import { NextPage } from 'next'
import Modal from './Modal'
const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <main className="" id="main" role={'main'}>
        {children}
      </main>
    </>
  )
}
export default Layout
