import Link from 'next/link'
import { useEffect } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import Button from '../Button'
import { useUser } from '@auth0/nextjs-auth0'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const UserCard: React.FC = () => {
  const { user } = useUser()
  const { innerWidth } = useWindowDimensions()
  useEffect(() => {
    console.log(user)
  }, [user])

  const logedIn = (
    <>
      <AiOutlineUser className="rounded-full border-2 text-3xl transition-all sm:text-4xl " />
      <h2 className="text-sm capitalize">{user?.name}</h2>
      <section className="flex w-full flex-col items-center justify-center gap-2">
        <Button herf={'/profile'}>Profile</Button>
        <Link href={'/api/auth/logout'}>
          <a className="transition-all hover:drop-shadow">Log Out</a>
        </Link>
      </section>
    </>
  )
  const notLogedIn = (
    <>
      <h2 className="text-lg">Hello There!</h2>
      <section className="flex w-full flex-col items-center justify-center gap-2">
        <Button className="w-full text-sm" herf={'/api/auth/login'}>
          Log In
        </Button>
        <p className="text-xs">
          New Customer?
          <Link href={'/api/auth/login'}>
            <a className="text-blue no-underline transition-all duration-1000 ease-linear hover:underline">
              Join Now!
            </a>
          </Link>
        </p>
      </section>
    </>
  )
  const mobile =
    'fixed left-0 top-0 translate-y-44 z-20 flex w-full gap-3 flex-col items-center bg-white pb-16 px-8'
  const desktop =
    'fixed right-[8.65rem] z-20 mt-8 flex w-48 flex-col items-center justify-center gap-3 rounded-[20px] bg-white py-8 px-4 drop-shadow-2xl'
  return (
    <div className={innerWidth >= 640 ? desktop : mobile}>
      <div className="absolute -top-2 -z-10 h-8 w-8 rotate-45 bg-white" />
      {user ? logedIn : notLogedIn}
    </div>
  )
}
export default UserCard
