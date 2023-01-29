
import { IEventsRequest } from './IEventsRequest'

export interface IRequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'UPDATE' | 'DELETE' | 'PUT' | 'PATCH'
  url: string
  headers?: object
  body?: object
  queryParams?: any
  events?: IEventsRequest
}