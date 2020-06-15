import { useMouseEvents } from 'beautiful-react-hooks'

const useClickOutside = (element, parent, callback) => {
  const { onMouseDown } = useMouseEvents()
  onMouseDown((event) => {
    if (
      element &&
      !element.contains(event.target) &&
      parent &&
      !parent.contains(event.target)
    ) {
      callback()
    }
  })
}

export default useClickOutside
