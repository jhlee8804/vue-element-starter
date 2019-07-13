// import qs from 'querystring'

// import apiHelper from '@/api-helper'

// const axios = apiHelper.axios,
//   routeName = 'users'

export default {
  getUserAsync(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            userId,
            userName: userId
          }
        })
      }, 500)
    })
  },
  getUserListAsync(paging, { pageNumber, pageCount, sortBy, orderBy }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            items: [{
              userId: 'jhlee',
              userName: 'jhlee'
            }],
            totalCount: 1,
            totalPageCount: 1,
            queryOption: {
              pageNumber,
              pageCount,
              sortBy,
              orderBy
            }
          }
        })
      }, 500)
    })
  }
}
