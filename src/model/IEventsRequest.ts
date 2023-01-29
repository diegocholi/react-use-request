
export interface IEventsRequest {
  onComplete?: () => void
  onError?: (err: any) => void
}