import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'

type Props = {
  mobile?: boolean
}

const Search: React.FC<Props> = ({ mobile }) => {
  var searchBox = useRef<HTMLInputElement>(null)
  var width = useWindowDimensions().innerWidth
  useLayoutEffect(() => {
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
    // mobile
    //   ? searchBox.current?.classList.add('hidden')
    //   : searchBox.current?.classList.remove('hidden')
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

// function Search() {
//   return (
//     <>
//       <div className="search">
//         <input type="text" placeholder=" "/>
//         <div>
//           <svg>
//             <use xlinkHref="#path"/>
//           </svg>
//         </div>
//       </div>
//       <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none'}}>
//         <symbol
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="00 0 160 28"
//           id="path"
//         >
//           <path
//             d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562"
//             transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)"
//           ></path>
//         </symbol>
//       </svg>
//     </>
//   )
// }
export default Search
