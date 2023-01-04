
import { IEventsRequest } from './IEventsRequest'
export interface IRequestOptions {
    method: string
    url: string
    headers?: object
    body?: object
    queryParams?: any
    errorMessage?: string
    successMessage?: string
    events?: IEventsRequest
}