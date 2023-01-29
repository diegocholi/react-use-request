export const buildHeaders = (headers: object | undefined) => {
  return {
    'Content-Type': 'application/json',
    ...headers,
  }
}
