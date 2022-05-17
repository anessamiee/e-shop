import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import Button from '../Button'

type Props = {
  login: boolean
}

const UserCard: React.FC<Props> = ({ login }) => {
  return (
    <div className="fixed right-[8.65rem] mt-8 flex w-48 flex-col items-center justify-center gap-3 rounded-[20px] bg-white py-8 px-4 drop-shadow-2xl">
      <div className="absolute -top-2 -z-10 h-8 w-8 rotate-45 bg-white " />
      {login ? logedIn : notLogedIn}
    </div>
  )
}
export default UserCard

const logedIn = (
  <>
    <AiOutlineUser className="rounded-full border-2 text-3xl transition-all sm:text-4xl " />
    <h2>Anes Samiee</h2>
    <section className="flex w-full flex-col items-center justify-center gap-2">
      <Button>Profile</Button>
      <Link href={'/'}>
        <a className="transition-all hover:drop-shadow">Log Out</a>
      </Link>
    </section>
  </>
)
const notLogedIn = (
  <>
    <h2 className="text-lg">Hello There!</h2>
    <section className="flex w-full flex-col items-center justify-center gap-2">
      <Button className="w-full text-sm">Log In</Button>
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
