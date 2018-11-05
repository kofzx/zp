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

function queryAll(selector) {
  const query = wx.createSelectorQuery();
  return query.selectAll(selector);
}

function scrollTo(scrollTop, duration = 300) {
  wx.pageScrollTo({
    scrollTop: scrollTop,
    duration: duration
  });
}

function formatAnimationFrameTime(t) {
  return 1000 / 60 * t;
}

export default {
  formatNumber,
  formatTime,
  queryAll,
  scrollTo,
  formatAnimationFrameTime
}
