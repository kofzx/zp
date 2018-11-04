<template>
	<div>
		<div v-show='isLoad' class="loading">
		  <template v-if="type === 'line'">
		    <div class="loading__line-dot" v-for="(item, index) in 3" :key="index"></div>
		  </template>
		  <template v-else-if="type === 'fade'">
		    <div class='loading__fade-dot'></div>
		  </template>
		  <template v-else-if="type === 'rotate'">
		    <div class="loading__rotate">
		      <div class="loading__rotate-container container1">
		        <div class="circle1 circle"></div>
		        <div class="circle2 circle"></div>
		        <div class="circle3 circle"></div>
		        <div class="circle4 circle"></div>
		      </div>
		      <div class="loading__rotate-container container2">
		        <div class="circle1 circle"></div>
		        <div class="circle2 circle"></div>
		        <div class="circle3 circle"></div>
		        <div class="circle4 circle"></div>
		      </div>
		      <div class="loading__rotate-container container3">
		        <div class="circle1 circle"></div>
		        <div class="circle2 circle"></div>
		        <div class="circle3 circle"></div>
		        <div class="circle4 circle"></div>
		      </div>
		    </div>
		  </template>
		  <template v-else-if="type === 'rotate3d'">
		    <div class="loading__rotate3d">
		      <div class="dot1"></div>
		      <div class="dot2"></div>
		    </div>
		  </template>
		  <template v-else-if="type === 'doubleFade'">
		    <div class="loading__doubleFade">
		      <div class="bounce1"></div>
		      <div class="bounce2"></div>
		    </div>
		  </template>
		</div>
		<div v-show='noMore' class="weui-loadmore weui-loadmore_line">
		  <div class="weui-loadmore__tips weui-loadmore__tips_in-line">没有更多了o(╥﹏╥)o</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		type: {         // 动画类型，可选： line, fade, rotate, rotate3d, doubleFade
	      type: String,
	      default: 'line'
	    },
	    isLoad: {       // 是否加载中
	      type: Boolean,
	      default: true
	    },
	    noMore: {       // 是否显示 “没有更多了”
	      type: Boolean,
	      default: false
	    }
	},
	watch: {
		noMore: function(noMore) {
			if (noMore) {     // 当 “没有更多了”时，不再加载
	          this.isLoad = false;
	        }
		}
	}
}
</script>

<style lang="less">
	.page__bg {
	  padding-bottom:40px;
	}
	.loading {
	  margin: 0 auto;
	  text-align: center;
	}
	.weui-loadmore__tips {
	  display:inline-block;
	  vertical-align:middle;
	}
	.weui-loadmore_line {
	  border-top:1px solid #e5e5e5;
	  margin-top:2.4em;
	}
	.weui-loadmore {
	  width:65%;
	  margin:2.5em auto 0.5em;
	  line-height:1.6em;
	  font-size:14px;
	  text-align:center;
	}
	.weui-loadmore__tips_in-line {
	  position:relative;
	  top:-.9em;
	  padding:0 .55em;
	  color:#999;
	}
	/* loading类型 */
	/* line */
	.loading__line-dot {
	  width: 6px;
	  height: 6px;
	  margin: 0 3px;
	  background-color: #FF9C00;
	  border-radius: 50%;
	  display: inline-block;
	  animation: load 1.4s infinite ease-in-out;
	  animation-fill-mode: both;
	}
	.loading__line-dot:nth-child(1) {
	  animation-delay: -0.32s;
	}
	  
	.loading__line-dot:nth-child(2) {
	  animation-delay: -0.16s;
	}
	@keyframes load {
	  0%, 80%, 100% { transform: scale(0.0); }
	  40% { transform: scale(1.0); }
	}
	/* fade */
	.loading__fade-dot {
	  display: inline-block;
	  width: 28px;
	  height: 28px;
	  background-color: #FF9C00;
	  border-radius: 100%; 
	  animation: scaleout 1.0s infinite ease-in-out;
	}
	@keyframes scaleout {
	  0% {
	    transform: scale(0.0);
	  } 100% {
	    transform: scale(1.0);
	    opacity: 0;
	  }
	}
	/* rotate */
	.loading__rotate {
	  display: inline-block;
	  width: 28px;
	  height: 28px;
	  position: relative;
	}
	.loading__rotate-container {
	  position: absolute;
	  width: 100%;
	  height: 100%;
	} 
	.loading__rotate-container .circle {
	  width: 6px;
	  height: 6px;
	  background-color: #FF9C00;
	  border-radius: 100%;
	  position: absolute;
	  animation: bouncedelay 1.2s infinite ease-in-out;
	  animation-fill-mode: both;
	} 
	.container2 {
	  -webkit-transform: rotateZ(45deg);
	  transform: rotateZ(45deg);
	} 
	.container3 {
	  -webkit-transform: rotateZ(90deg);
	  transform: rotateZ(90deg);
	}
	.circle1 { top: 0; left: 0; }
	.circle2 { top: 0; right: 0; }
	.circle3 { right: 0; bottom: 0; }
	.circle4 { left: 0; bottom: 0; }
	.container2 .circle1 {
	  -webkit-animation-delay: -1.1s;
	  animation-delay: -1.1s;
	} 
	.container3 .circle1 {
	  -webkit-animation-delay: -1.0s;
	  animation-delay: -1.0s;
	} 
	.container1 .circle2 {
	  -webkit-animation-delay: -0.9s;
	  animation-delay: -0.9s;
	}
	.container2 .circle2 {
	  -webkit-animation-delay: -0.8s;
	  animation-delay: -0.8s;
	}
	.container3 .circle2 {
	  -webkit-animation-delay: -0.7s;
	  animation-delay: -0.7s;
	} 
	.container1 .circle3 {
	  -webkit-animation-delay: -0.6s;
	  animation-delay: -0.6s;
	}
	.container2 .circle3 {
	  -webkit-animation-delay: -0.5s;
	  animation-delay: -0.5s;
	}
	.container3 .circle3 {
	  -webkit-animation-delay: -0.4s;
	  animation-delay: -0.4s;
	}
	.container1 .circle4 {
	  -webkit-animation-delay: -0.3s;
	  animation-delay: -0.3s;
	} 
	.container2 .circle4 {
	  -webkit-animation-delay: -0.2s;
	  animation-delay: -0.2s;
	}
	.container3 .circle4 {
	  -webkit-animation-delay: -0.1s;
	  animation-delay: -0.1s;
	}
	@keyframes bouncedelay {
	  0%, 80%, 100% {
	    transform: scale(0.0);
	    -webkit-transform: scale(0.0);
	  } 40% {
	    transform: scale(1.0);
	    -webkit-transform: scale(1.0);
	  }
	}
	/* rotate3d */
	.loading__rotate3d {
	  display: inline-block;
	  width: 28px;
	  height: 28px;
	  position: relative;
	  text-align: center;
	  animation: rotate 2.0s infinite linear;
	}
	.loading__rotate3d .dot1,
	.loading__rotate3d .dot2 {
	  width: 60%;
	  height: 60%;
	  display: inline-block;
	  position: absolute;
	  top: 0;
	  background-color: #FF9C00;
	  border-radius: 100%;  
	  animation: bounce 2.0s infinite ease-in-out;
	}
	.loading__rotate3d .dot2 {
	  top: auto;
	  bottom: 0px;
	  animation-delay: -1.0s;
	}
	@keyframes rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}
	@keyframes bounce {
	  0%, 100% {
	    transform: scale(0.0);
	  } 50% {
	    transform: scale(1.0);
	  }
	}
	/* doubleFade */
	.loading__doubleFade {
	  display: inline-block;
	  width: 28px;
	  height: 28px;
	  position: relative;
	}
	.bounce1, .bounce2 {
	  width: 100%;
	  height: 100%;
	  border-radius: 50%;
	  background-color: #FF9C00;
	  opacity: 0.6;
	  position: absolute;
	  top: 0;
	  left: 0;
	  animation: bounce 2.0s infinite ease-in-out;
	} 
	.bounce2 {
	  animation-delay: -1.0s;
	} 
	@keyframes bounce {
	  0%, 100% {
	    transform: scale(0.0);
	  } 50% {
	    transform: scale(1.0);
	  }
	}
</style>