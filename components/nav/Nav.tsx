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

const Nav: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false)
  const [categories, setCategories] = useState<string[]>([])
  const navHeight = useNavHeight().navHeight
  // const fetch = async () => {
  //  await axios('https://fakestoreapi.com/products/categories').then(res => setCategories(res.data))
  //   // const cat: string[] = await res.data
  //   // setCategories(cat)
  // }
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

  // useEffect(() => {
  //   var prevScrollpos = window.pageYOffset;
  //   window.onscroll = function() {
  //     var currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       // document.getElementById("navbar").style.top = "0";
  //       navRef.current?.style.top = "0";
  //     } else {
  //       navRef.current?.style.top = "-250px";
  //       // document.getElementById("navbar").style.top = "-50px";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   }
  // },[])

  const handleMenu = () => {
    setMenu(!menu)
  }
  const router = useRouter()
  return (
    <>
      <nav
        className="sticky top-0 z-20 flex w-full flex-col items-center justify-between gap-5 overflow-hidden bg-white px-8 py-12 sm:gap-10 sm:px-16"
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
            <li>
              <AiOutlineUser className="rounded-full text-3xl transition-all sm:text-4xl" />
            </li>
            <li>
              <div className="group relative">
                <RiShoppingCart2Line className="relative text-3xl transition-all sm:text-4xl" />
                {/* <RiShoppingCart2Fill className="absolute top-0 text-3xl opacity-0 transition-all group-hover:opacity-100 sm:text-4xl" /> */}
              </div>
            </li>
            <li className="transition-all duration-300 ease-in-out" ref={liRef}>
              <BsList
                className="text-3xl transition-all hover:text-blue sm:text-4xl"
                onClick={handleMenu}
                onMouseEnter={handleMenu}
              />
            </li>
          </ul>
        </div>
        <Search mobile />
      </nav>
      <div
        className="fixed right-0 h-screen w-full bg-white px-8 opacity-0 shadow-[0_60px_50px_-10px_rgb(0_0_0_/_0.15);] transition-all duration-100 ease-linear sm:h-1/2 sm:px-16 "
        id="nav"
        onMouseLeave={() => setMenu(false)}
        ref={menuRef}
      >
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
    </>
  )
}
export default Nav
