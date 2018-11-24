<template>
	<div class="online-call">
	    <div><img class="online-call__avatar" :src="avatar"></div>
	    <div class="online-call__word">
	        <p class="online-call__text">获取更多信息请联系</p>
	        <p class="online-call__text--tel"><span class="person">{{person}}:</span> {{phone}}</p>
	    </div>
	    <p class="online-call__now" @click='makeCall(phone)'>立即咨询</p>
	</div>
</template>

<script>
import wx from 'wx'

export default {
	props: {
		avatar: String,
		phone: [String, Number],
		person: String
	},
	methods: {
		makeCall (phone) {
			wx.makePhoneCall({
				phoneNumber: phone
			});
		}
	}
}
</script>

<style lang="less">
	.online-call {
	    background-color: #fff;
	    padding: 10px;
	    margin-top: 10px;
	    display: flex;
	    align-items: center;
	}
	.online-call__avatar {
	    width: 50px;
	    height: 50px;
	    margin-right: 15px;
	}
	.online-call__word {
	    width: 60%;
	    font-size: 12px;
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	}
	.online-call__text {
	    margin-bottom: 8px;
	    color: #666;
	}
	.online-call__text--tel {
		color: #ffae1a;
	    margin-bottom: 0;
	    font-size: 12px;
	    .person {
	    	font-size: 12px;
	    	color: #666;
	    }
	}
	.online-call__now {
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