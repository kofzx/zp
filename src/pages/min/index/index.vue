<template>
  <div class='index-wrapper'>
    <!-- 搜索 -->
    <search-box 
      ss-color='189ccd' 
      :has-ding='true' 
      ding-url='/pages/min/ding/main'
      :is-jump='true' 
      jump-url='/pages/min/ding/main'
      placeholder='找店铺/找项目'>
        <p class="iconfont icon-menu icon-menu--fix icon-fix white"></p>
    </search-box>
    <!-- 轮播 -->
    <swiper class='carousel' autoplay circular>
      <swiper-item v-for='(item, index) in pics' :key='index'>
        <img class='carousel-img' :src='item.pic' />
      </swiper-item>
    </swiper>
    <!-- 导航块 -->
    <section class="nav-wrapper zp-container pd-box rel">
      <div class="container row wrap">
        <div class="nav-item tc">
          <img class="inb img-box--mini" src="../../../images/navs/quick.png" />
          <p class='f12'>快速转店</p>
        </div>
        <div class="nav-item tc">
          <img class="inb img-box--mini" src="../../../images/navs/assign.png" />
          <p class='f12'>商铺转让</p>
        </div>
        <div class="nav-item tc">
          <img class="inb img-box--mini" src="../../../images/navs/ding.png" />
          <p class='f12'>找店选址</p>
        </div>
        <div class="nav-item tc">
          <img class="inb img-box--mini" src="../../../images/navs/hezuo.png" />
          <p class='f12'>招商加盟</p>
        </div>
        <div class="nav-item tc">
          <img class="inb img-box--mini" src="../../../images/navs/seek.png" />
          <p class='f12'>快速找店</p>
        </div>
        <div class="nav-item tc">
          <img class="inb img-box--mini" src="../../../images/navs/help.png" />
          <p class='f12'>开店百科</p>
        </div>
        <div class="nav-item tc">
          <img class="inb img-box--mini" src="../../../images/navs/case.png" />
          <p class='f12'>经典案例</p>
        </div>
        <div class="nav-item tc">
          <img class="inb img-box--mini" src="../../../images/navs/join.png" />
          <p class='f12'>人才招聘</p>
        </div>
      </div>
      <!-- 头条 -->
      <headline 
        light-color='#f86648'
        :news-list='newsList'
        news-title-field='title'
        news-time-field='time' />
    </section>
    <!-- 店铺数据 -->
    <section class="store-data zp-container container row">
      <div class="store-data__item flex-1">
        <p class="data">487</p>
        <p class="title f12">新增铺位</p>
      </div>
      <div class="store-data__item flex-1">
        <p class="data">4617</p>
        <p class="title f12">正在转铺</p>
      </div>
      <div class="store-data__item flex-1">
        <p class="data">1470</p>
        <p class="title f12">在线找店</p>
      </div>
    </section>
    <!-- 精准发布 -->
    <section class="publish zp-container">
      <!-- 标题 -->
      <div class="publish__title title-grp container row">
        <p class="f16">精准发布</p>
        <p>已匹配 <span class="light-color">4371</span>次</p>
      </div>
      <!-- 内容 -->
      <div class='container row'>
        <navigator class="publish__store container row center flex-1">
          <img src="https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png" alt="">
          <div class="tc">
            <p>我要转铺</p>
            <p class="publish__desc f12">快速转让店铺</p>
          </div>
        </navigator>
        <navigator class="publish__store container row center flex-1">
          <img src="https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png" alt="">
          <div class="tc">
            <p>我要选址</p>
            <p class="publish__desc f12">找到心怡店铺</p>
          </div>
        </navigator>
      </div>
    </section>
    <!-- 在线客服 -->
    <section class="online zp-container">
      <!-- 标题 -->
      <div class="title-grp container row">
        <p class="f16">在线咨询</p>
        <navigator class=''>查看更多 &gt; </navigator>
      </div>
      <div class="container row">
          <navigator class='flex-1 tc' hover-class='none' v-for='(item, index) in 4' :key='index'>
            <img class="online__avator inb" src="https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png" alt="">
            <p class="online__name inb">客服徐小姐</p>
          </navigator>
      </div>
    </section>
    <!-- 项目加盟 -->
    <section class="join zp-container">
      <!-- 标题 -->
      <div class="title-grp container row">
        <p class="f16">招商加盟</p>
        <navigator class=''>查看更多 &gt; </navigator>
      </div>
      <!-- 轮播 -->
      <swiper class='join__carousel' autoplay circular>
        <swiper-item class='join__carousel__item container row' v-for='(item, index) in 3' :key='index'>
          <img src="https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png" />
          <div class="flex-1">
            <h2 class="title">aaa</h2>
            <p class="desc f12">泰芒以多元化经营闻名，打开品牌高速发展打开全新的局面，泰芒作为全国的轻餐品牌，品牌调性清新、阳光、广受年轻人喜欢，现在如今有很多分店，已经遍布全国各个省份。中国的茶饮历史源远流长，结合时代的变迁要求，茶饮的品类日益增多，调查显示，中国14亿人口，人均年消费茶叶0.36公斤，数额可观。近年茶饮饮料年产量都在10000万吨，茶饮占餐饮市场份额超过20%，根据目前市场需求预测，中国以后平均每1000人就会拥有一家皇茶连锁店。</p>
            <p class="f12 light-color">1.2-13.7</p>
          </div>
        </swiper-item>
      </swiper>
    </section>
    <!-- 猜你喜欢 -->
    <section class="like zp-container">
      <!-- 标题 -->
      <div class="title-grp container row">
        <p class="f16">猜你喜欢</p>
        <navigator class=''>查看更多 &gt; </navigator>
      </div>
      <!-- 商铺列表 -->
      <store-item v-for='(item, index) in storeList' :key='index'
        color='189ccd'
        :show='item.show'
        :src='item.pic_path'
        :def='item.def'
        :title='item.title'
        :area='item.area'
        :cate='item.rname'
        :rental='item.rent'
        :time='item.addtime'
        :tags='item.tags'
        tag-field='name'>
      </store-item>
    </section>
    <ko-loading 
      :is-load='isLoading'
      :no-more='showNoMore'></ko-loading>
    <!-- <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a> -->
  </div>
</template>

<script>
import mock from '@/pages/mock'

import wx from 'wx'
import api from '@/service/api'

import loading from '@/components/layouts/ko-loading/index'

import storeItem from '@/components/core/common/store-item/index'

import searchBox from '@/components/core/min/search-box/index'
import headline from '@/components/core/min/headline/index'

let { pic, newsList, storeList } = mock;

export default {
  data () {
    return {
      "pics": pic,
      "newsList": newsList,
      storeList: [],
      isReachLastPage: false,
      isReachBottom: false,
      curPage: 0,
      catActive: 40,
      isLoading: false,
      showNoMore: false
    }
  },
  components: {
    'search-box': searchBox,
    'store-item': storeItem,
    'ko-loading': loading,
    headline
  },
  methods: {
    async getStoreList (cat_id = this.catActive, page = 1) {
      this.$flyio.request(api.STROE_LIST_WD, {
          cid: cat_id,
          p: page
        })
        .then(res => {
          let storeList = res.data.news;

          if (storeList == null || storeList == 'undefined') {
            this.isReachLastPage = true;
            this.loadingHide();
            this.showNoMore = true;
            return;
          }

          this.storeList = this.storeList.concat(storeList);
          this.modifyStoreList();

          console.log(this.storeList);
          this.isReachBottom = false;
        });
    },
    async modifyStoreList () {
      this.storeList.forEach(value => {
        this.$set(value, 'show', false);
        this.$set(value, 'def', 'https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png');
      });
    },
    loadingShow () {
      this.isLoading = true;
    },
    loadingHide () {
      this.isLoading = false;
    }
  },
  async created () {
    await this.getStoreList();
    await this.modifyStoreList();
  },
  async mounted () {
    wx.getSystemInfo({
      success: res => {
        this.screenH = res.screenHeight;
      }
    });
  },
  /*
   * 页面滚动
  */
  async onPageScroll () {
    if (!this.isReachBottom) {  // 函数节流
      // 图片懒加载
      const query = wx.createSelectorQuery();
      query.selectAll(".store-item__left").boundingClientRect(ret => {
        ret.forEach((item, index) => {
          if (item.top <= this.screenH) {
            this.$set(this.storeList[index], 'show', true);
          }
        });
      }).exec();
    }
  },
  /*
   * 上拉触底
  */
  async onReachBottom () {
    this.loadingShow();
    this.isReachBottom = true;
    let curPage = this.curPage;

    if (!this.isReachLastPage) {   // 当前不是最后一页
      this.curPage = curPage + 1;

      await this.getStoreList(this.catActive, this.curPage);
    }
    this.loadingHide();
  }
}
</script>

<style lang="less">
  @import '~@/style/common/variables.less';
  @import '~@/style/common/mixin.less';

  @color-grey: #adaeae;
  @color-grey-soft: #8f8f94;

  .title-grp {
    font-weight: 500;
    color: #565656;
    padding-bottom: 12.5px;
  }

  // 更改组件样式
  .search-wrapper,
  .loading__line-dot {
    background: @main !important;
  }
  // menu图标
  .icon-menu--fix {
    margin-left: 10px;
  }
  // 轮播
  .carousel,
  .carousel-img {
    width: 100%;
    height: 185px;
  }
  // nav-wrapper
  // loops
  .nav-item-top(@n, @i: 1) when (@i <= @n) {
    &:nth-child(@{i}) {
      margin: 10px 0 12px 0;
    }
    .nav-item-top(@n, @i + 1);
  }
  .nav-item-bottom(@n, @i: 5) when (@i <= @n) {
    &:nth-child(@{i}) {
      margin-bottom: 6px;
    }
    .nav-item-bottom(@n, @i + 1);
  }
  // start
  .nav-wrapper {
    top: -10px;
    z-index: 2;
  }
  .nav-item {
    width: 25%;
    .nav-item-top(4);     // 顶部4条
    .nav-item-bottom(8);  // 底部4条
  }
  // store-data
  .store-data__item {
      text-align: center;
      margin: 22px 0 16px 0;
      line-height: 28px;
      .data {
        font-size: 20px;
      }
      .title {
        color: @color-grey;
      }
  }
  .online,
  .join,
  .like {
    padding: 12.5px 3%;
    margin-top: 10px;
  }
  .like {
    padding: 12.5px 3% 0;
  }
  // publish 
  .publish {
    padding: 12.5px 1%;
    margin-top: 10px;
  }
  .publish__title {
    padding: 0 10px 12.5px;
  }
  .publish__store {
    height: 74px !important;
    background-color: #efeff4;
    padding: 10px 0;
    overflow: hidden;
    border-radius: 2px;
    &:first-child {
      margin-right: 5px;
    }
    img {
      width: 57px;
      height: 41px;
      margin-right: 17px;
    }
    p {
      line-height: 1.6;
    }
  }
  .publish__desc {
    color: @color-grey;
  }
  // online
  .online__avator {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  .online__name {
    color: @color-grey-soft;
  }
  // join 
  .join__carousel {
    width: 100%;
    height: 100px;
    box-shadow: 0 2px 3px 3px rgba(0, 0, 0, .08);
    border-radius: 4px;
  }
  .join__carousel__item {
    height: 100px;
    padding: 0 10px;
    img {
      width: 90px;
      height: 80px;
      margin-right: 15px;
    }
    .title {
      font-weight: 500;
      line-height: 1.5;
    }
    .desc {
      color: @color-grey-soft;
      line-height: 1.5;
      .text-overflow-line(2);
    }
    p {
      line-height: 1.5;
    }
  }
</style>
