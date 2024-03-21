type cnArg =
  | string
  | string[]
  | Record<string, boolean>
  | boolean
  | null
  | undefined

export const classNames = (...args: cnArg[]) => {
  let result = ''

  for (const arg of args) {
    if (typeof arg === 'string') {
      result += ' ' + arg

      //if argument is an plain {key: value} Object
    } else if (!!arg && arg.constructor === Object) {
      const classes = Object.entries(arg)
        .filter(([, value]) => Boolean(value))
        .map(([key]) => key)
        .join(' ')

      result += classes ? ' ' + classes : ''
    } else if (Array.isArray(arg)) {
      const classes = arg.filter(arg => Boolean).join(' ')

      result += classes ? ' ' + classes : ''
    } else {
      result += ''
    }
  }

  return result.trim()
}
