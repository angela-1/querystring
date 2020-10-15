import { Params } from './params'

export function stringify(params: Params): string {
  if (!params) {
    return ''
  }
  console.log('stringify', params)
  const urlSearchParams = new URLSearchParams()
  for (const key of Object.keys(params)) {
    const value = params[key]

    if (value === undefined || value === null) {
      continue
    } else {
      if (Array.isArray(value)) {
        console.log('is array', key, value, typeof value)
        urlSearchParams.append(key, `${value}`)
      } else {
        if (typeof value === 'object') {
          console.error(`"${key}" value "${value}" is NOT supported`)
        } else {
          console.log('add param', key, value)

          urlSearchParams.append(key, `${value}`)
        }
      }
    }
  }

  const searchParamsString = urlSearchParams.toString()
  console.log('encoded', searchParamsString)

  return searchParamsString
}

export function parse(encodedUri: string) {
  const searchParams = new URLSearchParams(encodedUri)
  console.log('sp', searchParams)
  const params: Params = {}
  for (const [key, value] of searchParams.entries()) {
    console.log('kv', key, value)
    if (value.includes(',')) {
      params[key] = value.split(',')
    } else {
      params[key] = value
    }
  }

  console.log('pa', params)

  return 'ok'
}
