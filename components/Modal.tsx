import { SetStateAction } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'

interface Props {
  state: boolean
  setState(data: boolean): void
}

const Modal: React.FC<Props> = ({ state, setState }) => {
  return (
    <div className="w-100 fixed top-0 left-0 z-50 h-screen w-screen backdrop-blur-3xl ">
      <div className="fixed top-1/2 left-1/2 flex h-1/4 w-3/4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[20px] bg-white drop-shadow-2xl sm:h-1/2 sm:w-1/2 sm:p-20 ">
        <h5 className="absolute top-5 right-5" onClick={() => setState(false)}>
          <AiOutlineClose className="text-2xl" />
        </h5>
        <section className="flex flex-col items-center justify-center gap-5">
          <h1>Please Login First</h1>
          <Button herf={'/api/auth/login'}>Login</Button>
        </section>
      </div>
    </div>
  )
}

export default Modal
