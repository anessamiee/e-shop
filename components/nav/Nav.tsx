import { useEffect, useRef, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsList } from 'react-icons/bs'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { BsArrowRightShort } from 'react-icons/bs'
import Link from 'next/link'
import Search from './Search'
import axios from 'axios'
import useNavHeight from '../../hooks/useNavHeight'
import { useRouter } from 'next/router'
import UserCard from './UserCard'
import Pages from './Pages'

const Nav: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false)
  const [userCard, setUserCard] = useState(false)
  const [categories, setCategories] = useState<string[]>([])
  const navHeight = useNavHeight().navHeight
  const router = useRouter()

  useEffect(() => {
    axios('https://fakestoreapi.com/products/categories').then((res) => {
      setCategories(res.data)
    })
  }, [])

  const navRef = useRef<HTMLElement>(null)
  const liRef = useRef<HTMLLIElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (menu) {
      menuRef.current?.classList.remove(`-z-30`)
      menuRef.current?.classList.add(`z-30`)
      menuRef.current?.classList.remove('opacity-0')
      menuRef.current?.classList.add('opacity-100')
      liRef.current?.classList.add('rotate-90')
    } else {
      menuRef.current?.classList.remove(`z-30`)
      menuRef.current?.classList.add(`-z-30`)
      menuRef.current?.classList.add('opacity-0')
      menuRef.current?.classList.remove('opacity-100')
      liRef.current?.classList.remove('rotate-90')
    }
  }, [menu])

  const handleMenu = () => {
    setMenu(!menu)
  }
  const handleUserCard = () => {
    setUserCard(!userCard)
  }
  useEffect(() => {
    router.events.on('routeChangeComplete', () => setUserCard(false))
  }, [router.events])

  return (
    <>
      <nav
        className="transitio-all sticky top-0 z-20 flex w-full flex-col items-center justify-between gap-5 overflow-hidden bg-white px-8 py-12 opacity-100 transition-[top_3s] ease-linear sm:gap-10 sm:px-16"
        id={'navbar'}
        ref={navRef}
      >
        <div className="flex w-full items-center justify-between">
          <Link href={'/'}>
            <a className="sm:w-1/3">
              <h1 className="text-3xl first-letter:text-blue md:text-4xl lg:text-5xl">
                E-Shop
              </h1>
            </a>
          </Link>
          <Search mobile={false} />
          <ul className="flex items-center justify-end gap-5 sm:w-1/3 sm:gap-10">
            <li id="user" className="">
              <AiOutlineUser
                className="rounded-full text-3xl transition-all sm:text-4xl"
                onClick={handleUserCard}
              />
              {userCard && <UserCard login={false} />}
            </li>
            <li id="cart">
              <div className="group relative">
                <RiShoppingCart2Line className="relative text-3xl transition-all sm:text-4xl" />
                {/* <RiShoppingCart2Fill className="absolute top-0 text-3xl opacity-0 transition-all group-hover:opacity-100 sm:text-4xl" /> */}
              </div>
            </li>
            <li
              className="transition-all duration-300 ease-in-out"
              ref={liRef}
              id="menu"
            >
              <BsList
                className="text-3xl transition-all hover:text-blue sm:text-4xl"
                onClick={handleMenu}
                // onMouseEnter={handleMenu}
              />
            </li>
          </ul>
        </div>
        <Search mobile />
      </nav>
      <div
        className="fixed right-0 flex h-screen w-full flex-col flex-wrap gap-5 bg-white px-8 opacity-0 shadow-[0_60px_50px_-10px_rgb(0_0_0_/_0.15);] transition-all duration-100 ease-linear sm:h-1/2 sm:flex-row sm:gap-0 sm:px-16 "
        onMouseLeave={() => setMenu(false)}
        ref={menuRef}
      >
        <div className="sm:w-1/2">
          <h2 className="flex items-center justify-between pb-4 text-3xl">
            Categories
          </h2>
          <ul className="flex flex-col gap-2">
            {categories.map((name, index) => (
              <li
                className="flex items-center justify-between text-xl capitalize"
                key={index}
              >
                <Link href={`/products/category/${name}`}>
                  <a
                    className="flex items-center justify-center"
                    onClick={() =>
                      router.events.on('routeChangeComplete', handleMenu)
                    }
                  >
                    {name}
                    <BsArrowRightShort />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" text-xl sm:w-1/2">
          <h2 className="flex items-center justify-between pb-4 text-3xl">
            Pages
          </h2>
          <div>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href={'/about'}>
                  <a
                    className="hover:underline hover:drop-shadow-xl"
                    onClick={() =>
                      router.events.on('routeChangeComplete', handleMenu)
                    }
                  >
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/contact-us'}>
                  <a
                    className="hover:underline hover:drop-shadow-xl"
                    onClick={() =>
                      router.events.on('routeChangeComplete', handleMenu)
                    }
                  >
                    Contact Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/mockup'}>
                  <a
                    className="hover:underline hover:drop-shadow-xl"
                    onClick={() =>
                      router.events.on('routeChangeComplete', handleMenu)
                    }
                  >
                    Mock Up Users
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Nav
