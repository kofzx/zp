<template>
    <a 
    	class="call-item"
    	:href='url'
    	hover-class='none'
    	>
        <img class="call-item__avatar" :src="src">
        <div class="call-item__info">
            <p>{{title}}</p>
            <p>电话 : {{phone}}</p>
            <p>资源<span> {{count1}} </span>&nbsp;&nbsp;案列<span> {{count2}} </span></p>
        </div>
        <i class="iconfont icon-phone" @click='makeCall(phone)'></i>
    </a>
</template>

<script>
import wx from 'wx'
	
export default {
	props: {
		url: String,
		src: String,
		title: String,
		phone: String,
		count1: [String, Number],
		count2: [String, Number],
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
	.call-item {
		border-bottom: 1px solid #e2e2e2;
	    padding: 10px 0;
	    margin-bottom: 10px;
	    display: flex;
    	align-items: center;
    	.iconfont {
			background-color: #ffae1a;
		    color: #fff;
		    padding: 5px;
		    font-size: 25px;
		    border-radius: 30px;
    	}
	}
	.call-item__avatar {
		width: 60px;
		height: 60px;
    	border-radius: 30px;
	}
	.call-item__info {
		width: 65%;
	    overflow: hidden;
	    margin-left: 15px;
	    color: #666;
	    line-height: 1.5;
	    p {
	    	font-size: 12px;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    max-width: 100%;
		    display: block;
	    }
	    span {
	    	color: #ffae1a;
    		font-size: 12px;
	    }
	}
</style>