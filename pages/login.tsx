import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'
import vector from '../assets/sign-in.svg'

const LoginPage: NextPage = () => {
  return (
    <div className="flex w-full">
      <div className="hidden w-1/2 select-none sm:block">
        <Image
          src={vector}
          alt="illustration background"
          objectFit="contain"
          height={650}
          className="-z-30"
          id="vector"
          objectPosition={'left'}
          priority
          loading="eager"
        />
      </div>
      <div className="m-ato flex w-full flex-1 flex-col items-start justify-center gap-8 bg-white px-8 py-8 sm:w-2/3 sm:px-16 lg:w-7/12 xl:w-8/12">
        <input placeholder="Username" type={'text'} className="input" />
        <input placeholder="Password" type={'password'} className="input" />
        <Link href={'/'}>
          <a className="no-underline transition-all duration-1000 ease-linear hover:underline">
            Forgot Password?
          </a>
        </Link>
        <Button secondary className="border-dark-grey">
          Login
        </Button>
        <p className="text-xs">
          Don&apos;t Have an Account?
          <Link href={'/'}>
            <a className="text-blue no-underline transition-all duration-1000 ease-linear hover:underline">
              &nbsp;Sign Up
            </a>
          </Link>
        </p>
      </div>
    </div>
  )
}
export default LoginPage
