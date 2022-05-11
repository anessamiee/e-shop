
import Meta from './Meta'
import Nav from './Nav'
import Slider from 'react-slick'
import CenterMode from './Carousel'
import { useEffect } from 'react'
import { NextPage } from 'next'

const Layout: NextPage = ({ children }) => {
  useEffect(() => {

  }, [])

  return (
    <>
      <Meta />
      <Nav />
      <main className="" id="main" role={'main'} >
        {children}
      </main>
    </>
  )
}
export default Layout
