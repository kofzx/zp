<template>
	<div>
		<div class="l-news-details bgc-fff">
		    <div class="l-center">
		        <div class="l-news-dtl-titb">
		            <p class="l-news-dtl-t">{{detail.title}}</p>
		            <p class="l-news-dtl-time">发布时间：{{detail.addtime}} <span>{{detail.click}}浏览</span></p>
		        </div>
		        <div class="l-news-dtl-word">{{detail.description}}</div>
		    </div>
		</div>	
	</div>
</template>

<script>
export default {
	data() {
		return {
			detail: {}
		}
	},
	mounted () {
		this.detail = JSON.parse(this.$mp.query.data);
		console.log(this.detail);
	},
}
</script>

<style lang="less">
	page {
		background: white;
	}
	.l-news-dtl-titb {
	    padding: 10px 0;
	    border-bottom: 1px solid #c5c5c5;
	}
	.l-news-dtl-t {
	    font-size: 16px;
	    line-height: 1.5;
	    margin: 5px 0 10px;
	}
	.l-news-dtl-time {
	    display: flex;
	    justify-content: space-between;
	    font-size: 12px;
	    color: #888;
	}
	.l-news-dtl-word{
	    padding: 10px 0;
	}
	.l-news-dtl-page {
	    display: flex;
	    flex-direction: column;
	    padding: 10px 0;
	}
	.l-news-dtl-page a {
	    margin: 5px 0;
	}
</style>