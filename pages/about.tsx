import { NextPage } from 'next'
import Image from 'next/image'
import vector from '../assets/about-us.svg'
const About: NextPage = () => {
  return (
    <div className="flex items-center justify-center px-8 sm:px-16 py-8">
      <div className="hidden w-1/2 select-none sm:block">
        <Image
          src={vector}
          alt="illustration background"
          objectFit="contain"
          height={500}
          className="-z-30"
          id="vector"
          objectPosition={'left'}
          priority
          loading="eager"
        />
      </div>
      <div className="w-full sm:w-1/2  text-xl">
        <h1 className='text-3xl'>About Us</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        deleniti consectetur veniam rem! Adipisci praesentium commodi tenetur
        cum. Deserunt recusandae hic fugit nobis labore. Minus atque voluptate
        minima iste itaque iure hic quia optio eius quasi laudantium voluptatum
        quos provident tempore, sint, blanditiis quibusdam sequi sit non
        recusandae quisquam doloribus!
      </div>
    </div>
  )
}
export default About