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

export default {
  formatNumber,
  formatTime,
  queryAll,
  scrollTo,
  formatAnimationFrameTime,
  getScreenHeight,
  getScrollTop,
  getScrollHeight
}
