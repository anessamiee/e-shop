import { NextPage } from 'next'
import Link from 'next/link'
import Button from '../components/Button'
import vector from '../assets/contact-us.svg'
import Image from 'next/image'
const ContactUs: NextPage = () => {
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
      <form
        className="m-ato flex w-full flex-1 flex-col items-start justify-center gap-8 bg-white px-8 py-8 sm:w-2/3 sm:px-16 lg:w-7/12 xl:w-8/12"
        id="form"
      >
        <h1 className="self-center text-3xl sm:text-xl md:text-2xl lg:text-3xl">
          Send us a Message!
        </h1>
        <input
          placeholder="Eamil"
          type={'email'}
          className="input"
          autoComplete="none"
        />
        <textarea placeholder="Message" className="input" autoComplete="none" />
        <Button secondary className="border-dark-grey" herf={'/contact-us'}>
          Send
        </Button>
      </form>
    </div>
  )
}

export default ContactUs
