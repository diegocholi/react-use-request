export const buildHeaders = (headers: any) => {
  return {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9tc2FwcGdyb3Vwcy1hcGktYXBwcy5wci5zZWJyYWUuY29tLmJyXC9hcGlcL3YxLjAuMFwvc3luYy1kYXRhLWF1dGhlbnRpY2F0b3IiLCJpYXQiOjE2NzAyNjM0MzcsImV4cCI6MTkxMTIyMzQzNywibmJmIjoxNjcwMjYzNDM3LCJqdGkiOiJHWTBoVzVrMjZtU0F5a1dzIiwic3ViIjoxMiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.9UwkLSYbXpJrAPjkGQlSF-mmyjcF9OkAPETzT7U0WlY',
    ...headers,
  }
}
