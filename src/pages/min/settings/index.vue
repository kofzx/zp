<template>
	<div>
		<div class="l-set-box">
		    <div class="l-center">
		        <div class="l-set-list">
		            <a
		            	href=""
		            	hover-class='none'
		             	class="alink"   
		             	style="padding-right: 35px">
		             	<p>头像</p>
		             	<img src="../../../../static/images/header.png">
		             	<i class="iconfont icon-arrow-right"></i>
		            </a>
		            <a hover-class='none' class="alink">
		            	<p>用户名</p>
		            	<p class="input-mask" v-show='user_input' @click="showInput('user_input')">{{username}}</p>
		            	<input 
		            		v-show='!user_input'
		            		type="text"
		            		:value='username'
		            		class="input-real"
		            		@blur='userBlur'>
		            </a>
		            <a hover-class='none' class="alink">
		            	<p>手机号码</p>
		            	<p class="input-mask" v-show='phone_input' @click="showInput('phone_input')">{{phone}}</p>
		            	<input 
							v-show='!phone_input'
		            		type="number"
		            		:value='phone'
		            		maxlength="11" 
		            		class="input-real"
		            		@blur='phoneBlur'>
		            </a>
		        </div>
		    </div>
		</div>
		<div class="l-set-box">
		    <div class="l-center">
		        <div class="l-set-list">
		            <a
		            	href="/pages/min/alter/main"
		            	hover-class='none'
		             	class='alink'>
		             	<p>修改密码</p>
		             	<i class="iconfont icon-arrow-right icon-arrow-right--fix"></i>
		             </a>
		            <a
		            	href='/pages/min/suggest/main'
		            	hover-class='none'
		             	class='alink'>
		             	<p>意见反馈</p>
		             	<i class="iconfont icon-arrow-right icon-arrow-right--fix"></i>
		             </a>
		        </div>
		    </div>
		</div>
		<div class="l-set-box">
		    <div class="l-center">
		        <div class="l-set-list">
		            <a 
		            	href="/pages/min/about/main" 
		            	hover-class='none'
		            	class='alink'>
		            	<p>关于我们</p>
		            	<i class="iconfont icon-arrow-right icon-arrow-right--fix"></i>
		            </a>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
import share from '@/mixins/share/index'

import qs from 'qs'
import { fullApi } from '@/service/api'

export default {
	mixins: [share],
	data() {
		return {
			user_input: true,
			phone_input: true,
			username: 'kofzx',
			phone: '987654321',
			headimg: '',
		}
	},
	methods: {
		render () {
			this.$flyio.get(fullApi.USERINFO)
				.then(res => {
					console.log(res);
					if (res.data.code == 1) {
						let { headimg, phone, username } = res.data.data;
						this.username = username;
						this.phone = phone;
						this.headimg = headimg;
	 				}
				});
		},
		showInput (status) {
			setTimeout(() => {
				this[status] = false;
			}, 300);
		},
		userBlur (e) {
			let value = e.mp.detail.value;
			if (value != "") {
				console.log('userBlur');
				this.user_input = true;		// 开启遮罩层
				this.$flyio.post(fullApi.MODIFY_INFO, qs.stringify({
					username: value
				}))
				.then(res => {
					console.log(res);
					let { code, msg } = res.data;
					if (code == 1) {
						this.$toast(msg);
						this.render();
					}
				});
			}
		},
		phoneBlur (e) {
			let value = e.mp.detail.value;
			if (value != "") {
				console.log('phoneBlur');
				this.phone_input = true;		// 开启遮罩层
				this.$flyio.post(fullApi.MODIFY_INFO, qs.stringify({
					phone: value
				}))
				.then(res => {
					console.log(res);
					let { code, msg } = res.data;
					if (code == 1) {
						this.$toast(msg);
						this.render();
					}
				});
			}
		}
	},
	onLoad () {
		this.render();
	}
}
</script>

<style lang="less">
	.l-set-box , .l-r-tf-box{
	    background-color: #fff;
	    margin-top: 10px;
	}
	.l-set-list .alink{
		position: relative;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    padding: 15px 30px 15px 10px;
	    border-bottom: 1px solid #eaeaea;
	}
	.l-set-list .alink img {
	    width: 40px;
	    height: 40px;
	}
	.l-set-list .iconfont{
	    position: absolute;
	    font-size: 20px !important;
	    color: #999;
	    right: 10px;
	}
	.l-set-list .icon-arrow-right--fix {
		position: absolute;
		top: 11px;
	}
	.l-set-pagebox{
	    background-color: #fff;
	    padding-bottom: 1px;
	}
	.l-set-pagebox .layui-input-block{
	    margin-left: 10px;
	}
	.l-set-pagebox .layui-form-item .layui-input-inline{
	    margin: 0 0 0 6px;
	}
	.l-set-pagebox .layui-textarea{
	    height: 250px;
	}
	.l-set-pagebox .login-form{
	    margin-top: 0;
	}
	.input-mask,
	.input-real {
		flex: 1;
		text-align: right;
		height: 20px;
		line-height: 20px;
		min-height: 0;
		font-size: 14px;
	}
	.input-mask:hover {
		background-color: #f5f7f9;
	}
</style>