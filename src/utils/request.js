export function usePost(url, data, contentType = 'application/json') {
  return new Promise((resolve, reject) => {
    data = {
      ...data
    }
    uni
      .showLoading({
        title: '加载中...'
      })
      .then((r) => console.log(r))
    uni.request({
      url: url,
      method: 'POST',
      timeout: 20000,
      data,
      header: {
        'Content-Type': contentType
      },
      success: (res) => resolve(res.data),
      fail: (err) => reject(err),
      complete: () => {
        uni.hideLoading()
      }
    })
  })
}

export function useFormPost(url, data, ContentType = 'application/x-www-form-urlencoded') {
  return new Promise((resolve, reject) => {
    data = {
      ...data
    }
    uni
      .showLoading({
        title: '加载中...'
      })
      .then((r) => console.log(r))
    uni.request({
      url: url,
      method: 'POST',
      timeout: 20000,
      data,
      header: {
        // || '' 考虑到登录API没有token。
        'Content-Type': ContentType
      },
      success: (res) => resolve(res.data),
      fail: (err) => reject(err),
      complete: () => {
        uni.hideLoading()
      }
    })
  })
}
export function useGet(url, data, contentType = 'application/json') {
  data = {
    ...data
  }
  uni
    .showLoading({
      title: '加载中...'
    })
    .then((r) => console.log(r))
  return new Promise((resolve, reject) => {
    uni.request({
      url: url,
      method: 'GET',
      timeout: 20000,
      header: {
        'Content-Type': contentType
      },
      data,
      success: (res) => resolve(res.data),
      fail: (err) => reject(err),
      complete: () => {
        uni.hideLoading()
      }
    })
  })
}
