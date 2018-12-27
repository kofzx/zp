function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

/*
 * platform: 小程序
 * 选择器： 选择所有同类元素
*/
function queryAll(selector) {
  const query = wx.createSelectorQuery();
  return query.selectAll(selector);
}

/*
 * platform: 小程序
 * 滚动至指定位置
*/
function scrollTo(scrollTop, duration = 300) {
  wx.pageScrollTo({
    scrollTop: scrollTop,
    duration: duration
  });
}

function formatAnimationFrameTime(t) {
  return 1000 / 60 * t;
}

function getScreenHeight() {
  return window.innerHeight;
}

function getScrollTop() {
  return document.body.scrollTop || document.documentElement.scrollTop;
}

function getScrollHeight() {
  return document.body.scrollHeight || document.documentElement.scrollHeight;
}

function objectToArray(object) {
  let array = [];
  for (let key in object) {
    let o = {};
    o.key = key;
    o.value = object[key];

    array.push(o);
  }
  return array
}

function compareArray(source, destination) {
  if (!source) {
    return false;
  }
  if (!destination) {
    return false;
  }
  if (source.length != destination.length) {
    return false;
  }
  for (let i = 0, l = source.length; i < l; i++) {
    if (source[i] != destination[i]) {
      return {
        index: i,
        value: destination[i]
      };
    }
  }
  return false;
}

function changeEye(type) {
  switch (type) {
    case 'password':
      type = 'text';
      break;
    case 'text':
      type = 'password';
      break;
  }
  return type;
}

/*
 * platform: 小程序
 * 单图上传
 * @param url  开发者服务器
 * @param file 图片临时路径
 * @param name 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容
 * @param data 传给后台的额外参数
*/
function uploadImg(url, file, name, data = null) {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: url,
      filePath: file,
      name: name,
      header: {
        'content-type': 'multipart/form-data'
      },
      formData: data,
      success: res => {
        resolve(res);
      },
      fail: err => {
        reject(err);
      }
    })
  });
}

export default {
  formatNumber,
  formatTime,
  queryAll,
  scrollTo,
  formatAnimationFrameTime,
  getScreenHeight,
  getScrollTop,
  getScrollHeight,
  objectToArray,
  uploadImg,
  changeEye,
  compareArray
}
