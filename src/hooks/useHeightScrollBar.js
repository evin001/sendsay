import { useState } from 'react'
import { useDidMount, useWindowResize } from 'beautiful-react-hooks'

const useHeightScrollBar = (ref) => {
  const [height, setHeight] = useState({ value: 0, init: 0 })

  const handleWindowResize = () => {
    const el = ref.current
    if (el) {
      let nextHeight

      if (el.clientHeight === el.offsetHeight) {
        nextHeight = { ...height, value: 0 }
      } else if (el.offsetHeight !== el.clientHeight) {
        if (height.init) {
          nextHeight = { ...height, value: height.init }
        } else {
          nextHeight = { value: getHeight(el), init: getHeight(el) }
        }
      }

      if (
        height.value !== nextHeight.value ||
        height.init !== nextHeight.init
      ) {
        setHeight(nextHeight)
      }
    }
  }

  useDidMount(() => {
    const el = ref.current
    if (el && el.offsetHeight !== el.clientHeight) {
      setHeight({ value: getHeight(el), init: getHeight(el) })
    }
  })

  useWindowResize(handleWindowResize)

  return height.value
}

function getHeight(el) {
  return 2 * el.offsetHeight - el.clientHeight
}

export default useHeightScrollBar
