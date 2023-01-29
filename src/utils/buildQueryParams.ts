export const buildQueryParams = (url: string, queryParams: any) => {
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
