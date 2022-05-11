import { useEffect, useState } from 'react'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { BsList } from 'react-icons/bs'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import Search from './nav/Search'

const Nav: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false)
  const [categories, setCategories] = useState<any[]>([])

  return (
    <nav
      className="sticky top-0 z-30 flex w-full flex-col items-center justify-between gap-5 overflow-hidden bg-white px-8 py-12 sm:gap-10 sm:px-16"
      id={'navbar'}
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
        <ul className="flex items-center justify-end gap-5 sm:gap-10 sm:w-1/3">
          <li>
            <AiOutlineUser className="rounded-full text-3xl transition-all hover:text-blue sm:text-4xl" />
          </li>
          <li>
            <div className="group relative">
              <RiShoppingCart2Line className="relative text-3xl transition-all hover:text-blue sm:text-4xl" />
              <RiShoppingCart2Fill className="absolute top-0 text-3xl opacity-0 transition-all group-hover:opacity-100 sm:text-4xl" />
            </div>
          </li>
          <li>
            <BsList
              className="z-50 text-3xl transition-all hover:text-blue sm:text-4xl"
              onClick={() => setMenu(true)}
              onMouseEnter={() => setMenu(true)}
            />
          </li>
        </ul>
      </div>
      <Search mobile />
      <div
        className="top-0 right-0 hidden h-screen w-full bg-white p-16 opacity-0 transition-all duration-100 ease-linear"
        id="nav"
        onMouseLeave={() => setMenu(false)}
      >
        <h2 className="flex items-center justify-between pb-4 text-3xl">
          Categories <AiOutlineClose onClick={() => setMenu(false)} />
        </h2>
        <ul className=" flex flex-col gap-2">
          {categories!.map((name) => (
            <li
              className="flex items-center justify-between text-xl capitalize"
              key={name._id}
            >
              <a href={'/'}>
                {name.name}
                <BsArrowRightShort />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
export default Nav
