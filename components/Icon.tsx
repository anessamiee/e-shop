import Image from 'next/image'

import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
interface Props {
  icon: string
}

const Icon: React.FC = (image) => {
  const icons = []
  return (
    <>
      <BsFillGrid3X3GapFill />
      <AiOutlineUser />
      <FiShoppingCart />
      {/* {icons(0)} */}
    </>
  )
}
export default Icon
