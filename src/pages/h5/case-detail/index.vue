<template>
	<div>
		<ko-header
			title='找铺' />
		<!--图片轮播-->
		<div class="swiper-container l-st-dtl-bn">
		    <div class="swiper-wrapper banners">
		        <div class="swiper-slide" v-for='item in 3'>
		        	<img src="../../../../static/images/banner1.png">
		        </div>
		    </div>
		    <!--     dot    -->
		    <div class="swiper-pagination" id="dot"></div>
		</div>

		<div class="l-st-dtl-tit-box">
		    <p class="l-st-dtl-tit">（繁华中心地段）南城兴隆新街爆棚旺铺餐饮店已转出！</p>
		    <div class="l-st-dtl-time">
		        <p>2018-11-05</p>
		        <p>编号:27346</p>
		    </div>
		</div>
		<div class="l-st-dtl-abox">
		    <div>
		        <p>面积</p>
		        <p>100平米</p>
		    </div>
		    <div>
		        <p>租金</p>
		        <p>8000元/月</p>
		    </div>
		    <div>
		        <p>转让费</p>
		        <p>3.6万</p>
		    </div>
		</div>
		<!--物业类型-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li>物业类型 : 临街门面</li>
		        <li>目前经营 : 湘菜馆</li>
		        <li>适合经营 : 餐馆</li>
		        <!--<li><i class="iconfont icon-ding-normal"></i>南城区</li>-->
		    </ul>
		</div>
		<!--租约信息-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li><i class="iconfont icon-help"></i> 租约信息</li>
		        <li>租金 : 8000 元/月</li>
		    </ul>
		</div>
		<!-- 信息描述-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li><i class="iconfont icon-news"></i> 信息描述</li>
		        <li>
		            <p class="l-st-dtl-list-word">
		                一：周边环境:本店铺位于东莞长安森虎儿童装店，属于繁/华的天虹商场三楼，附近全是繁/
		                华的商业街和密集的高档小区住宅，对面就是长安公园，长安政府，长
		                安广场，附近有沃多夫酒店公寓，，富尊商务公寓，长荣别墅区，莲花广场，怡景花园，
		                地王中心，百胜公寓，….…附近高档小区和酒店众多，地理位置非常旺，交通非常的便利
		                ，开车可直接到店铺门口，周边商圈成熟，发展前景甚好！二：铺位介绍:本店铺是一家森虎
		                儿童装店。地理位置非常的优越，附近全是高档小区，本店位于长安最/繁/华的高端商业地
		                带，店铺面积有40多个平方，店铺里所有设备齐全……..，全部转让。现店铺生意稳定，有固
		                定的客源，接店即可营业。可经营行业：童装三：店铺优势:1、店铺位于天虹商场三楼，（位置
		                好）；2、商场对面就是长安公园（人流量大）；3、店铺装修全新，（节省投资）；4、本店位
		                于长安最繁华的商业中心地区，（人流量大）5、店内货物齐全（接店可马上营业赚钱）6、店铺
		                位于电梯口处，旁边还有童乐园，（位置好）7、附近小区酒店多，客户稳定8、本店是加盟品牌
		                ，经营轻松四：转让原因：由于本人经营好几家店铺，确实没时间打理，所以不得已才把盈利中
		                的旺铺转让，本人诚心转让，有意向者可来店考察！</p>
		        </li>
		    </ul>
		</div>
		<tabbar 
	      :color='tabBar.color'
	      :selectedColor='tabBar.selectedColor'
	      :tabList='tabBar.list'
	      />
	</div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

import tabBar from '@/_start/h5/tabBar'

import koHeader from '@/components/layouts/ko-header/index'
import tabbar from '@/components/core/h5/tabbar/index'

export default {
	data() {
	    return {
	      tabBar
	    }
	},
	components: {
		'ko-header': koHeader,
		tabbar
	},
	mounted () {
		new Swiper('.l-st-dtl-bn', {
		    centeredSlides: true,
		    autoplay: {
		        delay: 3000,
		        disableOnInteraction: false
		    },
		    loop: true,
		    pagination: {
		        el: '.swiper-pagination',
		        clickable: true
		    }
		});
	}
}
</script>

<style lang="less">
	.l-st-dtl-bn {
		img {
			width: 100%;
		}
	}
	.l-st-dtl-tit-box{
	    background-color: #fff;
	    padding-bottom: 10px;
	}
	.l-st-dtl-tit{
	    font-size: 17px;
	    text-align: center;
	    line-height: 1.5;
	    margin: 0 auto;
	    padding: 10px 0;
	    width: 80%;
	    color: #333;
	}
	.l-st-dtl-time{
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    color: #9b9b9b;
	    font-size: 12px;
	}
	.l-st-dtl-time p{
	    margin: 0 5px;
	}
	.l-st-dtl-abox{
	    background-color: #fff;
	    display: flex;
	    padding-bottom: 10px;
	}
	.l-st-dtl-abox div{
	    display: flex;
	    flex-direction: column;
	    width: 33.3333%;
	    text-align: center;
	    color: #666;
	}
	.l-st-dtl-abox div p{
	    margin: 8px 0;
	}
	.l-st-dtl-abox div p:nth-child(2){
	    color: #ffae1a;
	    font-weight: bold;
	}
	.l-st-dtl-list{
	    background-color: #fff;
	    padding: 10px;
	    margin-top: 10px;
	}
	.l-st-dtl-list li{
	    border-bottom:1px solid #dbdbdb;
	    padding: 15px 0;
	    color: #444;
	    display: flex;
	    align-items: center;
	}
	.l-st-dtl-list li:nth-last-child(1){
	    border-bottom:0;
	}
	.l-st-dtl-list .iconfont{
	    font-size: 23px;
	    margin-right: 5px;
	    color: #999;
	}
	.l-st-dtl-list-word{
	    line-height: 1.5;
	    color: #888;
	    letter-spacing: 1px;
	    text-indent: 2em;
	}
	.l-st-dtl-bottom{
	    display: block;
	    position: fixed;
	    bottom: 0;
	    background-color: #fff;
	    border-top: 1px solid #e3e3e3;
	    width: 92%;
	    height: 60px;
	    padding: 0 15px;
	}
	.l-st-dtl-bottom p {
	    margin-top: 10px;
	    color: #000;
	}
	.l-st-dtl-bottom .iconfont{
	    position: absolute;
	    top: 12px;
	    right: 20px;
	    font-size: 28px;
	    color: #fff;
	    background-color: #ffae1a;
	    border-radius: 40px;
	    padding: 3px;
	}
	.l-st-dtl-call{
	    background-color: #fff;
	    padding: 10px;
	    margin-top: 10px;
	    display: flex;
	    align-items: center;
	}
	.l-st-dtl-call img {
	    width: 50px;
	    margin-right: 15px;
	}
	.l-st-dtl-call-w{
	    width: 60%;
	    font-size: 12px;
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	}
	.l-st-dtl-call-w p{
	    margin-bottom: 8px;
	    color: #666;
	}
	.l-st-dtl-call-w p:nth-child(2){
	    color: #ffae1a;
	    margin-bottom: 0;
	    font-size: 12px;
	}
	.l-st-dtl-call a{
	    background-color: #ffae1a;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    padding: 0 10px;
	    border-radius: 37px;
	    height: 30px;
	    color: #fff;
	}
</style>