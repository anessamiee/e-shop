import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import Button from '../Button'
import { useUser } from '@auth0/nextjs-auth0'

const UserCard: React.FC = () => {
  const { user } = useUser()
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
  return (
    <div className="sm fixed right-0 top-0 z-20 flex w-full translate-y-44 flex-col items-center gap-3 bg-white px-8 pb-16 sm:top-auto sm:right-[8.65rem] sm:mt-8 sm:w-48 sm:translate-y-0 sm:justify-center sm:rounded-[20px] sm:py-8 sm:px-4 sm:drop-shadow-2xl ">
      <div className="absolute -top-2 -z-10 h-8 w-8 rotate-45 bg-white" />
      {user ? logedIn : notLogedIn}
    </div>
  )
}
export default UserCard
