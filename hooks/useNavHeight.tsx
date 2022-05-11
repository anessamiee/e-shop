import { useEffect, useLayoutEffect, useState } from 'react'

type NavHeight = {
  navHeight: number | undefined
}
const useNavHeight = (): NavHeight => {
  const [height, setHeight] = useState<NavHeight>({ navHeight: undefined })

  // function getHeight() {
  //   if (typeof document !== 'undefined') {
  //     var nav = document.getElementById('navbar')
  //     return Number(nav?.clientHeight)
  //   } else return 0
  // }

  function handleHeight(): void {
    var nav = document.getElementById('navbar')
    setHeight({ navHeight: nav?.clientHeight })
  }
  useEffect(() => {
    handleHeight()
  }, [])
  useEffect(() => {
    // function handleHeight(): void {
    //   var nav = document.getElementById('navbar')
    //   setHeight({ navHeight: nav?.clientHeight })
    // }
    window.addEventListener('resize', handleHeight)
    return () => window.removeEventListener('resize', handleHeight)
  },[height])

  return height
}
export default useNavHeight
