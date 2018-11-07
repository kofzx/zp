<template>
	<div>
		<ko-header
			title='找铺' />
		<div class="l-st-dtl-tit-box">
		    <p class="l-st-dtl-tit">求租万江附近镇区工厂附近店铺！！急急急！</p>
		    <div class="l-st-dtl-time">
		        <p>2018-11-05</p>
		        <p>编号:24561</p>
		    </div>
		</div>
		<div class="l-st-dtl-abox">
		    <div>
		        <p>期望区域</p>
		        <p>万江镇</p>
		    </div>
		    <div>
		        <p>经营类型</p>
		        <p>个人</p>
		    </div>
		    <div>
		        <p>求租行业</p>
		        <p>餐馆</p>
		    </div>
		</div>
		<!--物业类型-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li>期望租金 : 面议</li>
		        <li>首选类型 : 一手</li>
		        <li>具体面积 : 200-500平米</li>
		        <!--<li><i class="iconfont icon-ding-normal"></i>南城区</li>-->
		    </ul>
		</div>
		<!--在线咨询-->
		<div class="l-st-dtl-call">
		    <div><img src="../../../../static/images/header.png" alt="header" title="header"></div>
		    <div class="l-st-dtl-call-w">
		        <p>获取更多信息请联系</p>
		        <p>网络客服:4004000999</p>
		    </div>
		    <a href="">立即咨询</a>
		</div>
		<!--租约信息-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li><i class="iconfont icon-help"></i> 租约信息</li>
		        <li>租金 : 面议</li>
		    </ul>
		</div>
		<!-- 信息描述-->
		<div class="l-st-dtl-list">
		    <ul class="center">
		        <li><i class="iconfont icon-news"></i> 信息描述</li>
		        <li>
		            <p class="l-st-dtl-list-word">
		                在万江附近，工业区，工厂门口或者市场附近，面积300平左右，有合适的请联系我</p>
		        </li>
		    </ul>
		</div>

		<!--bottom-->
		<div style="height: 70px">
		    <a href="" class="l-st-dtl-bottom">
		        <p>欧阳先生</p>
		        <p>点击联系</p>
		        <i class="iconfont icon-tel"></i>
		    </a>
		</div>
	</div>
</template>

<script>
import koHeader from '@/components/layouts/ko-header/index'

export default {
	components: {
		'ko-header': koHeader
	}
}
</script>

<style lang="less">
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
	    line-height: 14px;
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