import { NextRouter, useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'

type Props = {
  mobile?: boolean
}
const Search: React.FC<Props> = ({ mobile }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const searchBox = useRef<HTMLInputElement>(null)
  var width = useWindowDimensions().innerWidth
  const router: NextRouter = useRouter()
  useEffect(() => {
    console.log(inputValue === '')
    if (inputValue !== '') {
      router.push({ pathname: '/search', query: { title: inputValue }})
    } else {
      router.push('/')
    }
  }, [inputValue])

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
      className="input lg:w-3/4 xl:w-full "
      onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
        setInputValue(ev.target.value)
      }
    />
  )
}
Search.defaultProps = {
  mobile: false,
}

export default Search
