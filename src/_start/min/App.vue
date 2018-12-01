<script>
import wx from 'wx';

export default {
  created () {
    wx.login({
    	success: res => {
    		wx.setStorageSync('code', res.code);
    	}
    });
  }
}
</script>

<style lang="less">
@import '~@/style/min/index.less';
</style>
