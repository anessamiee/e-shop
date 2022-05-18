import Link from 'next/link'

type Props = {}
const Pages = () => {
  return (
    <div className=" sm:w-1/2 text-xl">
      <h2 className="flex items-center justify-between pb-4 text-3xl">Pages</h2>
      <div>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href={'/about'}>
              <a className="hover:underline hover:drop-shadow-xl">About</a>
            </Link>
          </li>
          <li>
            <Link href={'/contact-us'}>
              <a className="hover:underline hover:drop-shadow-xl">Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href={'/mockup'}>
              <a className="hover:underline hover:drop-shadow-xl">
                Mock Up Users
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Pages
