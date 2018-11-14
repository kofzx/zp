<template>
	<div>
		<section class="l-serv-dtl-box">
		    <div class="l-serv-del-bg"></div>
		    <div class="l-serv-del-headb">
		        <img src="../../../../static/images/header.png">
		        <p class="l-serv-del-headb-tit">客服徐小姐</p>
		        <p class="l-serv-del-headb-mun">12345678910</p>
		        <div>
		            <p><span>服务人数</span><span>1234</span></p>
		            <p><span>服务案列</span><span>1234</span></p>
		            <p><span>推荐资源</span><span>1234</span></p>
		        </div>
		    </div>
		    <div class="l-serv-dtl-pwr">
                <!--进度条-->
		        <div class="layui-progress">
		            <div class="layui-progress-bar" :style="{ width: progressWidth + '%' }">
                        <span class="layui-progress-text">{{progressWidth}}%</span>      
                    </div>
		        </div>
		        <div class="l-serv-dtl-pwr-w">
		            <p>成交 / 服务&nbsp;&nbsp;&nbsp;{{divisor}} / {{dividend === -1 ? 0 : dividend}}</p>
		        </div>
		    </div>
		    <!--个人服务能力-->
		    <div class="bgc-fff mt-10">
		        <p class="l-serv-del-wtit">个人服务能力</p>
		        <ul class="l-serv-del-list">
		            <li>现有推荐铺源 : <span>123</span> 家</li>
		            <li>服务成功案列 : <span>123</span> 家</li>
		            <li>平均服务时间 : <span>5-8</span> 天</li>
		            <li>服务过的人数 : <span>123</span> 人</li>
		            <li>综合服务态度 : <span>4.9</span> 星</li>
		        </ul>
		    </div>
		</section>
		<call-bottom
			color='189ccd'
			phone='133333' />
	</div>
</template>

<script>
import util from '@/utils/index'
import Tween from '@/utils/Tween'

import callBottom from '@/components/core/common/call-bottom'

export default {
    data () {
        return {
            divisor: 90,       // 除数
            dividend: 100,     // 被除数
            progressWidth: 0
        }
    },
	components: {
		'call-bottom': callBottom
	},
    mounted () {
        this.$nextTick()
            .then(() => {
                this.divisor ? this.divisor : 0;
                if (!this.dividend) {
                    this.divisor = 0;
                    this.dividend = -1;
                }
                let percentage = Math.round(this.divisor / this.dividend * 100);
                let t = 0, b = 0, c = percentage, d = util.formatAnimationFrameTime(1.6);
                let timer;

                var step = () => {
                    let value = Math.round(Tween.Elastic.easeInOut(t, b, c, d));
                    this.progressWidth = value;
                    t++;

                    if (t <= d) {
                        // 继续运动
                        timer = requestAnimationFrame(step);
                    } else {
                        // 动画结束
                        cancelAnimationFrame(timer);
                    }
                };
                step();
            });
    }
}
</script>

<style lang="less">
	@import '~@/style/common/variables.less';

    // 进度条
    .layui-progress {
        position: relative;
        height: 6px;
        border-radius: 20px;
        background-color: #e2e2e2;
    }
    .layui-progress-bar {
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        max-width: 100%;
        height: 6px;
        border-radius: 20px;
        text-align: right;
        background-color: @main;
        transition: all .3s;
    }
    .layui-progress-text {
        position: relative;
        top: -20px;
        line-height: 18px;
        font-size: 12px;
        color: #666;
    }

	.l-serv-del-bg{
        background: url("https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png") no-repeat center;
        height: 230px;
    }
    .l-serv-del-headb{
        position: relative;
        display: flex;
        flex-direction: column;
        text-align: center;
        border-bottom: 1px solid #dddcdc;
        background-color: #fff;
    }
    .l-serv-del-headb img {
        width: 75px;
        height: 75px;
        border-radius: 40px;
        position: absolute;
        top: -25px;
        right: 0;
        left: 0;
        margin: 0 auto;
    }
    .l-serv-del-headb-tit {
        margin-top: 65px;
        font-size: 16px;
        margin-bottom: 8px;
    }
    .l-serv-del-headb-mun {
        font-size: 12px;
        color: #999;
    }
    .l-serv-del-headb > div {
        display: flex;
        justify-content: space-around;
        margin: 15px 0 5px;
    }
    .l-serv-del-headb > div > p {
        display: flex;
        flex-direction: column;
        color: #666;
    }
    .l-serv-del-headb > div > p span:nth-child(2){
        color: @main;
        margin: 10px 0;
    }
    .l-serv-dtl-pwr{
        width: 80%;
        margin: 0 auto;
        padding: 35px 10% 10px;
        background-color: #fff;
    }
    .l-serv-dtl-pwr-w{
        text-align: right;
        color: #666;
        margin: 15px 0;
    }
    .l-serv-dtl-pwr-w p{
        font-size: 12px;
    }
    .l-serv-del-wtit {
        padding: 10px;
        font-size: 18px;
        color: #444;
        border-bottom: 1px solid #dfdddd;
        margin-bottom: 10px;
    }
    .l-serv-del-list {
        line-height: 2;
        margin-left: 25px;
        padding-bottom: 10px;
    }
    .l-serv-del-list li {
        color: #666;
    }
    .l-serv-del-list li span{
        color: @main;
    }
</style>