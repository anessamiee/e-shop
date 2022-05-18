import Link from 'next/link'
import { useEffect } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import Button from '../Button'
import { useSession, signIn, signOut } from 'next-auth/react'

type Props = {
  login: boolean
}

const UserCard: React.FC<Props> = ({ login }) => {
  const { data: session, status } = useSession()

  useEffect(() => {
    console.log(session?.user?.name.firstname)
    console.log(status)
    console.log(session?.expires)
  }, [session?.expires])

  const logedIn = (
    <>
      <AiOutlineUser className="rounded-full border-2 text-3xl transition-all sm:text-4xl " />
      <h2 className="capitalize">
        {session?.user?.name.firstname} {session?.user?.name.lastname}
      </h2>
      <section className="flex w-full flex-col items-center justify-center gap-2">
        <Button>Profile</Button>
        <button
          className="transition-all hover:drop-shadow"
          onClick={(e) => {
            e.preventDefault()
            signOut()
          }}
        >
          Log Out
        </button>
      </section>
    </>
  )
  const notLogedIn = (
    <>
      <h2 className="text-lg">Hello There!</h2>
      <section className="flex w-full flex-col items-center justify-center gap-2">
        <Button
          className="w-full text-sm"
          herf={'/api/auth/signin'}
          onClick={(e) => {
            e.preventDefault()
            signIn()
          }}
        >
          Log In
        </Button>
        <p className="text-xs">
          New Customer?
          <Link href={'/'}>
            <a className="text-blue no-underline transition-all duration-1000 ease-linear hover:underline">
              Join Now!
            </a>
          </Link>
        </p>
      </section>
    </>
  )

  return (
    <div className="fixed right-[8.65rem] mt-8 flex w-48 flex-col items-center justify-center gap-3 rounded-[20px] bg-white py-8 px-4 drop-shadow-2xl">
      <div className="absolute -top-2 -z-10 h-8 w-8 rotate-45 bg-white " />
      {status === 'authenticated' ? logedIn : notLogedIn}
      {/* {session && <button onClick={() => signIn()}>Sign in</button>} */}
    </div>
  )
}
export default UserCard
