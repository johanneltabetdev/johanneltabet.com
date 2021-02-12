export default ({ $axios, error: nuxtError }) => {
  $axios.onError(({ response = {}, message = '' } = {}) => {
    nuxtError({
      statusCode: response.status,
      message,
    })
    return Promise.resolve(false)
  })
  $axios.onResponse((response = {}) => Promise.resolve(response.data))
}
