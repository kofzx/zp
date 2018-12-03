<template>
	<div>
		<!-- 加盟列表 -->
		<div 
			v-for='(item, index) in list'
			:key='index'
			class="l-join-box">
		    <div class="l-center">
		        <div class="l-join-bor">
		            <div class="l-join-img"><img :src="item.pic_path ? item.pic_path : defaultImg"></div>
		            <div class="l-join-word">
		                <p class="l-join-tit">{{item.title}}</p>
		                <p class="l-join-mint">{{item.description}}</p>
		                <p class="l-join-money">{{item.money}}</p>
		            </div>
		            <p class="l-join-call" @click='makeCall(item.phone)'>免费咨询</p>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
import share from '@/mixins/share/index'	
import makePhone from '@/mixins/make-phone/index'

import wx from 'wx'

import { pgjImg, pgjApi, fullApi } from '@/service/api'

export default {
	mixins: [share, makePhone],
	data() {
		return {
			img_url: pgjApi,
			defaultImg: pgjImg,
			list: []
		}
	},
	methods: {
		getLeague () {
			return new Promise((resolve) => {
		        this.$flyio.get(fullApi.JOIN_INIT)
		            .then(res => {
		            	this.list = res.data.data;
		            });
		    });
		}
	},
	created () {
		this.getLeague();
	}
}
</script>

<style lang="less">
	@import '~@/style/common/variables.less';

	.l-join-box {
	    margin: 10px 0;
	}
	.l-join-bor {
	    background: url('https://www.puguanjiacn.com/Public/Mobile/images/bg.jpg') no-repeat center;
	    border-radius: 5px;
	    display: flex;
	    align-items: center;
	    padding: 15px;
	    margin-bottom: 10px;
	}
	.l-join-img {
	    border-radius: 38px;
	    width: 70px;
	    img {
	    	width: 70px;
	    	height: 70px;
	    }
	}
	.l-join-word {
	    width: 155px;
	    margin-left: 25px;
	    overflow: hidden;
	    color: #fff;
	    line-height: 1.5;
	}
	.l-join-tit {
	    color: #fff;
	    font-size: 16px;
	    font-weight: bold;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    max-width: 100%;
	    display: block;
	}
	.l-join-mint {
	    font-size: 13px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    max-width: 100%;
	    display: block;
	}
	.l-join-money {
	    color: @main;
	    font-size: 20px;
	    font-weight: bold;
	}
	.l-join-call {
	    background-color: #fff;
	    display: inline-block;
	    padding: 5px 12px;
	    border-radius: 15px;
	    font-size: 13px;
	    color: @main;
	}
</style>