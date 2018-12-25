<template>
	<div>
		<!-- 轮播 -->
	    <swiper class='carousel swiper-box' autoplay circular indicator-dots>
	      <swiper-item 
	      	v-for='(item, index) in detail.images_path' 
	      	:key='index'>
	        <img 
	        	class="carousel-img" 
	        	:src='ep_url + item.pic_path' />
	      </swiper-item>
	    </swiper>

		<div class="l-st-dtl-tit-box">
		    <p class="l-st-dtl-tit">{{detail.title}}</p>
		    <div class="l-st-dtl-time">
		        <p>{{detail.addtime}}</p>
		        <p>编号:{{detail.number}}</p>
		    </div>
		</div>
		<div class="l-st-dtl-abox">
		    <div>
		        <p>面积</p>
		        <p>{{detail.area}}平米</p>
		    </div>
		    <div>
		        <p>租金</p>
		        <p>{{detail.rent}}元/月</p>
		    </div>
		    <div>
		        <p>转让费</p>
		        <p>{{detail.rent_money}}万</p>
		    </div>
		</div>
		<!--物业类型-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li>物业类型 : {{detail.cat_name}}</li>
		        <!-- <li>目前经营 : 湘菜馆</li> -->
		        <!-- <li>适合经营 : 餐馆</li> -->
		        <li><i class="iconfont icon-ding-normal"></i>{{detail.rname}}</li>
		    </ul>
		</div>
		<!-- 在线咨询 -->
		<call-card 
			:avatar="detail.headimg ? detail.headimg : '../../../../static/images/header.png'"
			:person='detail.linkman'
			:phone='detail.phone' />
		<!--租约信息-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li><i class="iconfont icon-help"></i> 租约信息</li>
		        <li>租金 : {{detail.rent}} 元/月</li>
		    </ul>
		</div>
		<!--转让信息-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li><i class="iconfont icon-yq"></i> 转让信息</li>
		        <li>转让费用 : {{detail.rent_money}}万</li>
		        <!-- <li>是否空转 : {{detail.is_empty == '0' ? '不可空转' : '可空转'}}</li> -->
		    </ul>
		</div>
		<!-- 信息描述-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li><i class="iconfont icon-news"></i> 信息描述</li>
		        <li>
		            <p 
		            	class="l-st-dtl-list-word" 
		            	v-html='detail.description'></p>
		        </li>
		    </ul>
		</div>
		<call-bottom
			color='ffae1a'
			:person='detail.linkman'
			:phone='detail.phone'
			:is-collect='isCollect'
			@switchCollect='switchCollect' />
	</div>
</template>

<script>
import share from '@/mixins/share/index'
import { pgjApi, fullApi } from '@/service/api' 

import callCard from '@/components/core/common/call-card'
import callBottom from '@/components/core/common/call-bottom'

export default {
	mixins: [share],
	data() {
		return {
			detail: {},
			img_url: pgjApi,
			ep_url: '',
			isCollect: false,
			login: '',
		}
	},
	components: {
		'call-card': callCard,
		'call-bottom': callBottom
	},
	methods: {
		get_is_collect () {
			let detail = this.detail;
			this.$flyio.get(fullApi.IS_COLLECT, {
				id: detail.sid
			})
				.then(res => {
					let { code, is_collect } = res.data;
					if (code == 1) {
						this.isCollect = is_collect;
					}
				});
		},
		switchCollect (status) {
			let login = this.login;
			if (!login) {
				this.goLogin();
				return;
			}
			let detail = this.detail;
			// 请求接口
			this.$flyio.get(fullApi.COLLECT, {
				id: detail.sid
			})
				.then(res => {
					let { code, msg } = res.data;
					if (code == 1) {
						this.isCollect = true;
					} else if (code == 0) {
						this.isCollect = false;
					}
					this.$toast(msg);
				});
		},
		goLogin () {
			wx.navigateTo({
				url: '../login/main'
			});
		}
	},
	onLoad (options) {
		let data_decodeURI = decodeURIComponent(options.data);
		let data_json = JSON.parse(data_decodeURI);
		this.detail = data_json;
	},
	onShow () {
		try {
		  let login = wx.getStorageSync('login');
		  if (login) {
		    this.login = login;
		    // 请求
			this.get_is_collect();
		  }
		} catch (e) {}
	},
	onUnload () {
		wx.setStorageSync('assign_detail_unload', true);
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