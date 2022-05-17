import { useEffect, useState } from 'react'

type NavHeight = {
  navHeight: number | undefined
}
const useNavHeight = (): NavHeight => {
  const [height, setHeight] = useState<NavHeight>({ navHeight: undefined })

  function handleHeight(): void {
    var nav = document.getElementById('navbar')
    setHeight({ navHeight: nav?.clientHeight })
  }
  useEffect(() => {
    handleHeight()
  }, [])
  useEffect(() => {
    window.addEventListener('resize', handleHeight)
    return () => window.removeEventListener('resize', handleHeight)
  }, [height])

  return height
}
export default useNavHeight
