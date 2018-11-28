<template>
	<div>
		<img class="kefu-logo" src="https://www.puguanjiacn.com/Public/Home/images/logo.png">
		<p class="kefu-title">铺莞家</p>
		<div class="contact-card">
			<div 
				class="contact-card__item container row no-stretch"
				@click='makeCall(phone)'>
				<i class="iconfont icon-phone"></i>
				<div class="contact-card__phone flex-1 container row">
					<p class="f12">点击拨打客服热线</p>
					<p class="f12">400-0889-003</p>
				</div>
				<i class="iconfont icon-arrow-right icon-fix"></i>
			</div>
			<button 
				class="contact-card__item container row no-stretch btn-clear"
				open-type="contact">
				<i class="iconfont icon-comment"></i>
				<div class="contact-card__phone flex-1 container row">
					<p class="f12">点击连接微信客服</p>
				</div>
				<i class="iconfont icon-arrow-right icon-fix"></i>
			</button>
		</div>
	</div>
</template>

<script>
import share from '@/mixins/share/index'	
import makePhone from '@/mixins/make-phone/index'

import wx from 'wx'

export default {
	mixins: [share, makePhone],
	data() {
		return {
			phone: '400-0889-003'
		}
	}
}
</script>

<style lang="less">
	page {
		background: white;
	}
	.kefu-logo {
		width: 75px;
		// height: 75px;
		height: 45px;
		display: block;
		margin: 75px auto 20px;
	}
	.kefu-title {
		margin-bottom: 70px;
		font-weight: 600;
		font-size: 14px;
		text-align: center;
	}
	.contact-card {
		width: 90.6667%;
		margin: 0 auto;
	}
	.contact-card__item {
		box-sizing: border-box;
		padding: 14px 20px 14px 15px;
		background: #fdf5e6;
		border-radius: 4px;
		font-size: 14px;
		line-height: normal;
		box-shadow: 0 1px 2px 2px #eee;
		.icon-fix {
			position: relative;
			top: -1px;
			color: #65625c;
			font-size: 1.2em !important;
		}
		&:nth-child(1) {
			margin-bottom: 16px;
		}
	}
	.contact-card__phone {
		margin: 0 42px 0 22px;
	}
</style>