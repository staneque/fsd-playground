type cnArg = string | Record<string, boolean>

export const cn = (...args: cnArg[]) => {
  let result = ''

  for (const arg of args) {
    if (typeof arg === 'string') {
      result += ' ' + arg
    } else if (!!arg && arg.constructor === Object) {
      result +=
        ' ' +
        Object.entries(arg)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ')
    } else {
      result += ''
    }
  }

  return result.trim()
}
