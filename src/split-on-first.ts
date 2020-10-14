export function splitOnFirst(str: string, separator: string): string[] {
  if (!(typeof str === 'string' && typeof separator === 'string')) {
    throw new TypeError('Expected the arguments to be of type `string`')
  }

  if (separator === '') {
    return []
  }

  const separatorIndex = str.indexOf(separator)

  if (separatorIndex === -1) {
    return []
  }

  return [
    str.slice(0, separatorIndex),
    str.slice(separatorIndex + separator.length)
  ]
}
