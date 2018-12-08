<template>
	<div>
		<!-- 关于我们 -->
		<div class="bgc-fff">
		    <div class="l-center">
		        <div class="l-logo-box">
		            <img mode='widthFix' class="about-logo" src="https://www.puguanjiacn.com/Public/Home/images/logo.png">
		            <div class="l-about-box">
		                <p class="l-about-tit">公司简介</p>
		                <p class="l-about-line"></p>
		            </div>
		            <p class="l-about-en">Company Profile</p>
		        </div>
		        <div class="l-about-img"><img mode='widthFix' :src="photo[0].pic_path"></div>
		        <div class="l-about-word">
		            <p>{{about.one}}</p>
		        </div>
		    </div>
		</div>
		<div class="bgc-fff mt-10">
		    <div class="l-center">
		        <div class="l-logo-box">
		            <div class="l-about-box">
		                <p class="l-about-tit">专业团队</p>
		                <p class="l-about-line"></p>
		            </div>
		            <p class="l-about-en">Professional Team</p>
		        </div>
		        <div class="l-about-img"><img mode='widthFix' :src="photo[1].pic_path"></div>
		        <div class="l-about-word">
		            <p>{{about.two}}</p>
		            <p>{{about.three}}</p>
		        </div>
		    </div>
		</div>
		<div class="bgc-fff mt-10">
		    <div class="l-center">
		        <div class="l-logo-box">
		            <div class="l-about-box">
		                <p class="l-about-tit">企业文化</p>
		                <p class="l-about-line"></p>
		            </div>
		            <p class="l-about-en">Corporate Culture</p>
		        </div>
		        <div class="l-about-img"><img mode='widthFix' :src="photo[2].pic_path"></div>
		        <div class="l-about-word">
		            <p>{{about.company}}</p>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
import share from '@/mixins/share/index'

import { fullApi } from '@/service/api'

export default {
	mixins: [share],
	data() {
		return {
			photo: [],
			about: ''
		}
	},
	onLoad () {
		this.$flyio.get(fullApi.ABOUT)
			.then(res => {
				console.log(res);
				let { code, config, photo } = res.data;
				if (code == 1) {
					this.about = config;
					this.photo = photo;
				}
			});
	}
}
</script>

<style lang="less">
	@import '~@/pages/common/about/index.less';
</style>