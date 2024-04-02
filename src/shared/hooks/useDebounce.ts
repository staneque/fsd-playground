import { useRef, useMemo, useEffect } from 'react'
import debounce from 'lodash.debounce'

export const useDebounce = (
  callback: (...args: unknown[]) => void,
  delay = 1000
) => {
  const ref = useRef(callback)

  useEffect(() => {
    ref.current = callback
  }, [callback])

  const debouncedCallback = useMemo(() => {
    const func = (...arg: unknown[]) => {
      return ref.current(...arg)
    }

    return debounce(func, delay)
  }, [delay])

  return debouncedCallback
}
