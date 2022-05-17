import { useEffect, useRef } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'

type Props = {
  mobile?: boolean
}

const Search: React.FC<Props> = ({ mobile }) => {
  var searchBox = useRef<HTMLInputElement>(null)
  var width = useWindowDimensions().innerWidth
  useEffect(() => {
    const handelVisiblity = () => {
      if (width >= 1024 && mobile === false) {
        searchBox.current?.classList.remove('hidden')
      } else if (width < 1024 && mobile === true) {
        searchBox.current?.classList.remove('hidden')
      } else {
        searchBox.current?.classList.add('hidden')
      }
    }
    handelVisiblity()
  }, [mobile, width])
  return (
    <input
      ref={searchBox}
      type="text"
      placeholder="Search what you need!"
      className="w-full border-b-2 border-dark-grey pb-1 outline-none transition-all ease-linear hover:border-opacity-100 focus:border-opacity-100 focus:shadow-xl sm:top-0 lg:w-3/4 xl:w-full "
    />
  )
}
Search.defaultProps = {
  mobile: false,
}

export default Search
