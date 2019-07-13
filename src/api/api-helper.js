import Axios from 'axios'

const axios = Axios.create({
  baseURL: '/',
  timeout: 15 * 1000
})

// request
axios.interceptors.request.use(req => {
  return req
}, error => {
  logger.error('[RestAPI/Request]: ', error.response.data)
  return Promise.reject(error)
})

// response
axios.interceptors.response.use(res => res, error => {
  logger.error('[RestAPI/Response]: ', error.response.data)
  return Promise.reject(error)
})

function handleResponse(obj) {
  //console.log(obj) // test

  if (obj instanceof Error) {
    if (obj.response) {
      return {
        status: obj.response.status,
        success: false,
        message: _.get(obj, 'response.data.message', obj.response.statusText)
      }
    }

    return {
      status: 500,
      success: false,
      message: obj.message
    }
  }

  return Object.assign({}, obj.data, { status: 200 })
}

export default {
  axios,
  handleResponse
}
