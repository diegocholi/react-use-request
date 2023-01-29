import axios, { AxiosResponse, Method } from 'axios'
import { useCallback, useRef, useState } from 'react'
import { IRequestOptions } from './model'

const useRequest = <T>(
  requestOptions: IRequestOptions
): [
  data: T | undefined,
  fetch: () => void,
  isLoading: boolean,
  clearData: () => void
] => {
  const {
    method,
    url,
    body,
    headers,
    queryParams = undefined,
    events = undefined,
  } = requestOptions
  const [data, setData] = useState<T | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const buildQueryParams = () => {
    let urlBuild: string = url
    if (queryParams) {
      urlBuild = urlBuild.concat('?')
      for (let key in queryParams)
        urlBuild = urlBuild
          .concat(key)
          .concat('=')
          .concat(queryParams[key])
          .concat('&')

      urlBuild = urlBuild.substring(0, urlBuild.length - 1)
    }
    return urlBuild
  }

  const buildHeaders = () => {
    return {
      'Content-Type': 'application/json',
      ...headers,
    }
  }

  const clearRef = useRef<() => void>(() => {})
  clearRef.current = useCallback(() => {
    setData(undefined)
  }, [setData])
  const clearData = clearRef.current

  const buildFetch = () => {
    setIsLoading(true)
    clearData()
    axios({
      method: method as Method,
      url: buildQueryParams(),
      headers: buildHeaders(),
      data: body,
    })
      .then((response: AxiosResponse) => {
        const data = response.data
        if (data) {
          setData(data)
        } else setData(undefined)

        setIsLoading(false)
        if (events?.onComplete) events.onComplete()
      })
      .catch((error: any) => {
        setData(undefined)
        setIsLoading(false)
        if (error) if (events?.onError) events.onError(error)
      })
  }

  const fetchRef = useRef<() => void | undefined>(() => {})
  fetchRef.current = buildFetch
  const fetch = useCallback(() => {
    fetchRef.current()
  }, [fetchRef])

  return [data, fetch, isLoading, clearData]
}

export default useRequest
