<template>
	<div>
		<!-- 加盟列表 -->
		<div class="l-join-box">
		    <div class="l-center">
		        <div class="l-join-bor">
		            <div class="l-join-img"><img src="../../../../static/images/header.png"></div>
		            <div class="l-join-word">
		                <p class="l-join-tit">美宜佳便利店</p>
		                <p class="l-join-mint">便利店</p>
		                <p class="l-join-money">3.2万-5.5万</p>
		            </div>
		            <a href="" class="l-join-call">免费咨询</a>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="less">
	.l-join-box {
	    margin: 10px 0;
	}
	.l-join-bor {
	    background: url('https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png') no-repeat center;
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
	    color: #ffae1a;
	    font-size: 20px;
	    font-weight: bold;
	}
	.l-join-call {
	    background-color: #fff;
	    display: inline-block;
	    padding: 5px 12px;
	    border-radius: 15px;
	    font-size: 13px;
	    color: #2196F3;
	}
</style>