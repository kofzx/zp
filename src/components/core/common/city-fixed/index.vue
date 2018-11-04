<template>
    <div class="city-fixed container center">
    	<div class="city-fixed__content">
    		<p class="city-fixed__title f12 g9 tc" 
    			v-for='(item, index) in newCityTitles' 
    			:key='index' 
    			@click.stop.prevent='titleClick(item.id)'>{{item.title}}</p>
    	</div>
    </div>
</template>

<script>
    export default {
    	props: {
    		cityTitles: Array,		// 城市标题
            hotId: String,          // "热门的id"
    	},
        computed: {
            // 处理后的标题数组
            newCityTitles: function() {
                let arr = [];
                this.cityTitles.forEach((value, index, array) => {
                    let obj = {};
                    obj.title = value;
                    // 对热门字样做处理
                    if (/^热门/.test(value)) {
                        obj.id = this.hotId;
                    } else {
                        obj.id = value;
                    }

                    arr.push(obj);
                });
                return arr;
            }
        },
    	methods: {
    		titleClick (title) {
    			this.$emit('titleClick', title);
    		}
    	}
    }
</script>

<style lang="less">
	@import '~@/components/common/com.less';

    .city-fixed {
    	position: fixed;
    	top: 0; bottom: 0; right: 10px;
    	width: 25px;
    }
    .city-fixed__title {
		margin: 4px 0;
    }
</style>