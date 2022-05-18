import { NextRouter, useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import useWindowDimensions from '../../hooks/useWindowDimensions'

type Props = {
  mobile?: boolean
}
const Search: React.FC<Props> = ({ mobile }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const searchBox = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLDivElement>(null)

  var width = useWindowDimensions().innerWidth
  const router: NextRouter = useRouter()
  useEffect(() => {
    if (inputValue !== '') {
      router.push({ pathname: '/search', query: { title: inputValue.trim() } })
    } else {
      router.push('/')
    }
  }, [inputValue])
  useEffect(() => {
    if (inputValue === '') {
      closeRef.current?.classList.add('hidden')
      closeRef.current?.classList.remove('block')
    } else {
      closeRef.current?.classList.remove('hidden')
      closeRef.current?.classList.add('block')
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
    <div className="relative w-full lg:w-3/4 xl:w-full" ref={searchBox}>
      <input
        type="text"
        placeholder="Search what you need!"
        className="input"
        value={inputValue}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
          setInputValue(ev.target.value)
        }
      />
      <div className="absolute top-0 right-0 hidden " ref={closeRef}>
        <AiOutlineClose
          className="pb-1 text-3xl"
          onClick={() => setInputValue('')}
        />
      </div>
    </div>
  )
}
Search.defaultProps = {
  mobile: false,
}

export default Search
