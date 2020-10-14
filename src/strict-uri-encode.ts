export function strictUriEncode(str: string) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (x) => `%${x.charCodeAt(0).toString(16).toUpperCase()}`
  )
}
