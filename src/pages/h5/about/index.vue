<template>
	<div>
		<ko-header
			title='找铺' />
		<!-- 关于我们 -->
		<div class="bgc-fff">
		    <div class="l-center">
		        <div class="l-logo-box">
		            <img src="../../../../static/images/logo.jpg" alt="logo" title="logo">
		            <div class="l-about-box">
		                <p class="l-about-tit">公司简介</p>
		                <p class="l-about-line"></p>
		            </div>
		            <p class="l-about-en">Company Profile</p>
		        </div>
		        <div class="l-about-img"><img src="../../../../static/images/banner1.png" alt="about" title="about"></div>
		        <div class="l-about-word">
		            <p>
		                东莞市店铺转让网络科技有限公司，专业提供通过互联网平台给广大店铺经营者快速转店、
		                开店选址服务，并集店铺营销策划、老板管理培训为一体的综合性服务公司。
		                店铺转让秉持 “让商铺经营更轻松，让个体生活更美好”为公司理念，致力于店铺的租
		                售交易平台及 未来店铺商圈的大数据，为店铺的线上线下交易租售提供全方位的服务。
		                公司下设转让部 、选址部、运营部、咨询培训部等。公司以让商铺经营更轻松，让个体
		                生活更美好”的企 业使命,服务于广大实体店老板。
		            </p>
		        </div>
		    </div>
		</div>
		<div class="bgc-fff mt-10">
		    <div class="center ">
		        <div class="l-logo-box">
		            <div class="l-about-box">
		                <p class="l-about-tit">专业团队</p>
		                <p class="l-about-line"></p>
		            </div>
		            <p class="l-about-en">Professional Team</p>
		        </div>
		        <div class="l-about-img"><img src="../../../../static/images/banner1.png" alt="about" title="about"></div>
		        <div class="l-about-word">
		            <p>一个优秀的团队能创造奇迹，在店铺转让良好的工作环境，活跃的讨论气氛，宽松的想象空间 ，创
		                新的工作理念，使店铺转让如容纳百川的茂林，广纳人才，创意不断。优秀的客服人员， 更是铺先
		                生向客户郑重许下诺言的强有力的前提。</p>
		            <p>
		                我们拥有：专业的商业策划师，经验丰富的客服人员、店铺推广人员，强有力的线上线下执行能力
		                ，荣获全国十佳称号的专业互联网团队。
		            </p>
		            <p>
		                店铺转让在一对一销售服务中，专业的客服团队是以店铺及客户的需求为中心展开，每一间店铺
		                都有一个专门的对接客服。 从你委托那一刻开始，专门的客服就会对你的店铺进行全方位的跟踪
		                ，并尽最大可能的让你的店铺增加曝光量， 并推荐适合你要求的客服来店铺洽谈。
		            </p>
		        </div>
		    </div>
		</div>
		<div class="bgc-fff mt-10">
		    <div class="center ">
		        <div class="l-logo-box">
		            <div class="l-about-box">
		                <p class="l-about-tit">企业文化</p>
		                <p class="l-about-line"></p>
		            </div>
		            <p class="l-about-en">Corporate Culture</p>
		        </div>
		        <div class="l-about-img"><img src="../../../../static/images/banner1.png" alt="about" title="about"></div>
		        <div class="l-about-word">
		            <p>
		                认真、快、坚守承诺，绝不找借口。
		                军井未倔，将不言渴；军灶未开，将不言饿；
		                雨不披蓑，雪不穿裘；将士冷暖，永记我心 。
		            </p>
		        </div>
		    </div>
		</div>

		<tabbar 
	      :color='tabBar.color'
	      :selectedColor='tabBar.selectedColor'
	      :tabList='tabBar.list'
	      />
	</div>
</template>

<script>
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
	}
}
</script>

<style lang="less">
	.l-logo-box{
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    padding: 15px 0;
	    flex-direction: column;
	}
	.l-logo-box img{
	    width: 225px;
	}
	.l-about-box{
	    position: relative;
	    margin: 15px 0;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	}
	.l-about-tit{
	    color: #666;
	    background-color: #fff;
	    z-index: 1;
	    padding: 0 10px;
	    font-size: 16px;
	}
	.l-about-line{
	    width: 200px;
	    border-top: 1px solid #666;
	    position: absolute;
	}
	.l-about-en{
	    color: #ffae1a;
	}
	.l-about-img{
	    overflow: hidden;
	}
	.l-about-img img{
	    width: 100%;
	}
	.l-about-word {
	    padding: 10px 0;
	    line-height: 2;
	    font-size: 15px;
	    color: #333;
	    text-indent: 30px;
	}
</style>