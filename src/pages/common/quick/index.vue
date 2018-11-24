<template>
	<div></div>
</template>

<script>
export default {
	data() {
		return {
			type: 'seek'
		}
	}
}
</script>

<style lang="less">
	@import '~@/style/common/variables.less';

	.l-qk-tf-bgbox {
	    background-image: url('http://www.pgj.com/Mobile/images/bg.jpg');
	    background-repeat: no-repeat;
	    background-position: center; 
	}
	.l-qk-tf-bgword {
	    padding: 30px 10px;
	    line-height: 2;
	    color: #fff;
	    text-align: center;
	    p {
	    	font-size: 24px;
	    	span {
	    		color: @main;
    			font-size: 35px;
	    	}
	    }
	}
	.l-qk-tf-form {
	    padding: 25px 10px;
	    text-align: center;
	}
	.l-qk-tf-word {
	    color: #666;
	    margin-bottom: 20px;
	}
	.l-qk-tf-put {
	    border: 2px solid @main;
	    width: 80%;
	    margin: 0 auto;
	    height: 40px;
	    line-height: 40px;
	    border-radius: 5px;
	    overflow: hidden;
	    background-color: @main;
	    input {
	    	height: 40px;
		    width: 70%;
		    padding: 0 10px;
		    box-sizing: border-box;
	    }
	    button {
	    	background-color: @main;
		    height: 40px;
		    width: 28%;
		    box-sizing: border-box;
		    color: #fff;
		    letter-spacing: 2px;
	    }
	}
	.l-qk-tf-ys {
	    background-color: #fff;
	    padding: 20px 0;
	    text-align: center;
	}
	.l-qk-tf-ys-tit {
	    font-size: 20px;
	    span {
	    	font-size: 23px;
    		color: @main;
	    }
	}
	.l-qk-tf-ys-list {
		li {
			display: flex;
		    border: 2px solid @main;
		    width: 70%;
		    margin: 25px auto;
		    height: 45px;
		    border-radius: 35px;
		    color: @main;
		    justify-content: space-between;
		    align-items: center;
		    p {
		    	margin: 0 16px;
    			font-size: 22px;
		    }
		    .iconfont {
		    	font-size: 25px;
		    }
		}
	}
	.l-qk-tf-swrv {
	    background: url('http://www.pgj.com/Mobile/images/bg.jpg');
	    background-repeat: no-repeat;
	    background-position: center; 
	    text-align: center;
	    color: #fff;
	    padding: 30px 0;
	}
	.l-qk-tf-swrv-tit {
	    padding-bottom: 30px;
	    font-size: 23px;
	}
	.l-qk-tf-swrv-list {
		li {
			display: flex;
		    margin-bottom: 25px;
		    align-items: center;
		}
		.iconfont {
			font-size: 40px;
		    margin: 0 15px;
		    color: @main;
		}
		div {
			text-align: left;
		    display: flex;
		    flex-direction: column;
		    justify-content: center;
		    line-height: 1.5;
		}
	}
	.l-qk-tf-swrv-list-tit {
	    font-size: 16px;
	}
	.l-qk-tf-swrv-list-w {
	    color: @main;
	    font-size: 15px;
	}
</style>