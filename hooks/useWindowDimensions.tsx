import { useEffect, useState } from 'react'

type WindowDimentions = {
  innerWidth: number
  innerHeight: number
}

const useWindowDimensions = (): WindowDimentions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
    innerWidth: 0,
    innerHeight: 0,
  })
  function handleResize(): void {
    setWindowDimensions({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    })
  }
  useEffect(() => {
    handleResize()
  }, [])
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return (): void => window.removeEventListener('resize', handleResize)
  }, [windowDimensions])

  return windowDimensions
}

export default useWindowDimensions
