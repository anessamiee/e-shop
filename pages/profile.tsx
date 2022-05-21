import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { NextPage } from 'next'
import Image from 'next/image'
import vector from '../assets/profile.svg'
import Button from '../components/Button'
import Meta from '../components/Meta'

const Profile: NextPage = () => {
  const { user } = useUser()
  return (
    <>
      <Meta title="Profile" />
      <div className="flex flex-row-reverse items-center justify-center px-8 py-8 sm:px-16">
        <div className="hidden w-1/2 select-none sm:block">
          <Image
            src={vector}
            alt="illustration background"
            objectFit="contain"
            height={550}
            width={550}
            className="-z-30"
            id="vector"
            objectPosition={'left'}
            priority
            loading="eager"
          />
        </div>
        <div className="flex w-full flex-col justify-center gap-3 bg-white text-xl sm:w-1/2">
          <h1 className="text-3xl">Profile</h1>
          <h2 className="md:text-2xl">Name: {user?.name}</h2>
          <h2 className="md:text-2xl">Email: {user?.email} </h2>
          <h2 className="md:text-2xl">Nickname: {user?.nickname}</h2>
          <Button herf={'/api/auth/logout'} secondary>
            Log Out
          </Button>
        </div>
      </div>
    </>
  )
}
export default Profile

export const getStaticProps = withPageAuthRequired()
