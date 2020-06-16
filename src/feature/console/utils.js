export function formatRequest(value, parse = true) {
  if (!value) return ''
  const data = parse ? JSON.parse(value) : value
  return JSON.stringify(data, null, 2)
}
