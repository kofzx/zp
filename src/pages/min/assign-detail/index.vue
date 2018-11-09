<template>
	<div>
		<!-- 轮播 -->
	    <swiper class='carousel swiper-box' autoplay circular indicator-dots>
	      <swiper-item v-for='(item, index) in 3' :key='index'>
	        <img class="carousel-img" src='../../../../static/images/banner1.png' />
	      </swiper-item>
	    </swiper>

		<div class="l-st-dtl-tit-box">
		    <p class="l-st-dtl-tit">（繁华中心地段）南城兴隆新街爆棚旺铺餐饮店急转！！</p>
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
		        <p>面议</p>
		    </div>
		</div>
		<!--物业类型-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li>物业类型 : 临街门面</li>
		        <li>目前经营 : 湘菜馆</li>
		        <li>适合经营 : 餐馆</li>
		        <li><i class="iconfont icon-ding-normal"></i>南城区</li>
		    </ul>
		</div>
		<!-- 在线咨询 -->
		<call-card 
			avatar='../../../../static/images/header.png'
			phone='133333' />
		<!--租约信息-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li><i class="iconfont icon-help"></i> 租约信息</li>
		        <li>租金 : 8000 元/月</li>
		    </ul>
		</div>
		<!--转让信息-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li><i class="iconfont icon-yq"></i> 转让信息</li>
		        <li>转让费用 : 面议</li>
		        <li>是否空转 : 可空转</li>
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
		<call-bottom
			color='189ccd'
			phone='133333' />
	</div>
</template>

<script>
import callCard from '@/components/core/common/call-card'
import callBottom from '@/components/core/common/call-bottom'

export default {
	components: {
		'call-card': callCard,
		'call-bottom': callBottom
	}
}
</script>

<style lang="less">
	@import '~@/style/common/variables.less';

	@import '~@/style/min/swiper.less';
	@import '~@/style/common/components/top-card.less';
	@import '~@/style/common/components/cell-list.less';

	// 重写组件样式
	.online-call__text--tel {
		color: @main !important;
	}
	.online-call__now {
		background-color: @main !important;
	}
	.call-bottom__tel {
		color: @main !important;
	}
</style>