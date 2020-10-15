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
        value.forEach((v: string | number) => {
          urlSearchParams.append(key, `${v}`)
        })
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
    if (Object.keys(params).includes(key)) {
      params[key] = searchParams.getAll(key)
    } else {
      params[key] = value
    }
  }

  console.log('pa', params)

  return 'ok'
}

export default {
  stringify,
  parse
}
