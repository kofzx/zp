<template>
  <div class='index-wrapper'>
    <!-- 搜索 -->
    <search-box 
      ss-color='189ccd' 
      :has-ding='true' 
      ding-url='/ding'
      :is-jump='true' 
      jump-url='/ding'
      placeholder='找店铺/找项目'>
        <p class="iconfont icon-menu icon-menu--fix icon-fix white"></p>
    </search-box>
    <!-- 轮播 -->
    <div class="swiper-container top-swiper carousel">
        <div class="swiper-wrapper">
            <div class="swiper-slide" 
              v-for='(item, index) in pics' 
              :key='index'>
              <img class='carousel-img' :src='item.pic' />
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <!-- 导航块 -->
    <section class="nav-wrapper zp-container pd-box rel">
      <div class="container row wrap">
        <a 
          v-for='(item, index) in navBar'
          :key='index'
          class="nav-item tc"
          :open-type='item.openType'
          :href='item.url'
          hover-class='none'>
          <img class="inb img-box--mini" :src="item.pic" />
          <p class='f12'>{{item.title}}</p>
        </a>
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
        <a class="publish__store container row center flex-1">
          <img src="https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png" alt="">
          <div class="tc">
            <p>我要转铺</p>
            <p class="publish__desc f12">快速转让店铺</p>
          </div>
        </a>
        <a class="publish__store container row center flex-1">
          <img src="https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png" alt="">
          <div class="tc">
            <p>我要选址</p>
            <p class="publish__desc f12">找到心怡店铺</p>
          </div>
        </a>
      </div>
    </section>
    <!-- 在线客服 -->
    <section class="online zp-container">
      <!-- 标题 -->
      <div class="title-grp container row">
        <p class="f16">在线咨询</p>
        <a class=''>查看更多 &gt; </a>
      </div>
      <div class="container row">
          <a class='flex-1 tc' hover-class='none' v-for='(item, index) in 4' :key='index'>
            <img class="online__avator inb" src="https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png" alt="">
            <p class="online__name inb">客服徐小姐</p>
          </a>
      </div>
    </section>
    <!-- 项目加盟 -->
    <section class="join zp-container">
      <!-- 标题 -->
      <div class="title-grp container row">
        <p class="f16">招商加盟</p>
        <a class=''>查看更多 &gt; </a>
      </div>
      <!-- 轮播 -->
      <div class="swiper-container join-swiper join__carousel">
        <div class="swiper-wrapper">
            <div class="swiper-slide join__carousel__item container row" v-for='(item, index) in 3' :key='index'>
              <img src="https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png" />
              <div class="flex-1">
                <h2 class="title">aaa</h2>
                <p class="desc f12">泰芒以多元化经营闻名，打开品牌高速发展打开全新的局面，泰芒作为全国的轻餐品牌，品牌调性清新、阳光、广受年轻人喜欢，现在如今有很多分店，已经遍布全国各个省份。中国的茶饮历史源远流长，结合时代的变迁要求，茶饮的品类日益增多，调查显示，中国14亿人口，人均年消费茶叶0.36公斤，数额可观。近年茶饮饮料年产量都在10000万吨，茶饮占餐饮市场份额超过20%，根据目前市场需求预测，中国以后平均每1000人就会拥有一家皇茶连锁店。</p>
                <p class="f12 light-color">1.2-13.7</p>
              </div>
            </div>
        </div>
      </div>
    </section>
    <!-- 猜你喜欢 -->
    <section class="like zp-container">
      <!-- 标题 -->
      <div class="title-grp container row">
        <p class="f16">猜你喜欢</p>
        <a class=''>查看更多 &gt; </a>
      </div>
      <!-- 商铺列表 -->
      <store-item v-for='(item, index) in storeList' :key='index'
        color='189ccd'
        :url="'/pages/min/assign-detail/main?id=' + item.id"
        :show='item.show'
        :src='item.pic_path'
        def='https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png'
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
      :no-more='showNoMore' />
    <tabbar 
      :color='tabBar.color'
      :selectedColor='tabBar.selectedColor'
      :tabList='tabBar.list'
      />
    <!-- <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a> -->
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

import Index from '@/pages/common/index/index'
import reachBottom from '@/mixins/reach-bottom/index.h5'

import util from '@/utils/index'

import localData from '@/pages/common/index/localData'
import tabBar from '@/_start/h5/tabBar'
import { apiName, ytApi, api, fullApi } from '@/service/api'

import loading from '@/components/layouts/ko-loading/index'
import storeItem from '@/components/core/common/store-item/index'
import searchBox from '@/components/core/h5/search-box/index'
import headline from '@/components/core/h5/headline/index'
import tabbar from '@/components/core/h5/tabbar/index'

export default {
  mixins: [Index, reachBottom],
  data() {
    return {
      tabBar,
      navBar: localData.navBar
    }
  },
  components: {
    'search-box': searchBox,
    'store-item': storeItem,
    'ko-loading': loading,
    headline,
    tabbar
  },
  methods: {
    getStoreList (cat_id = this.catActive, page = 1) {
      this.$flyio.request(apiName + api.STROE_LIST, {
          cid: cat_id,
          p: page
        })
        .then(res => {
          let storeList = JSON.parse(res.data).news;

          if (storeList == null || storeList == 'undefined') {
            this.isReachLastPage = true;
            this.loadingHide();
            this.showNoMore = true;
            return;
          }

          this.storeList = this.storeList.concat(this.modifyStoreList(storeList));

          console.log(this.storeList);
          this.isReachBottom = false;
        });
    },
    _lazyLoad () {
      if (!this.isReachBottom) {  // 函数节流
        // 图片懒加载
        let storeImgs = document.getElementsByClassName("store-item__left");
        for (let i = 0; i < storeImgs.length; i++) {
          let itemTop = storeImgs[i].getBoundingClientRect().top;
          if (itemTop <= this.screenH) {
            this.$set(this.storeList[i], 'show', true);
          }
        }
      }
    },
    _reachBottom () {
      // scrollTop + 屏幕高 === 文档总高
      if (util.getScrollTop() + util.getScreenHeight() === util.getScrollHeight()) {
        this.loadingShow();
        this.isReachBottom = true;
        let curPage = this.curPage;

        if (!this.isReachLastPage) {   // 当前不是最后一页
          this.curPage = curPage + 1;

          this.getStoreList(this.catActive, this.curPage);
        }
        this.loadingHide();
      }
    },
    // 注册滚动事件
    registerScrollEvent () {
      window.onscroll = () => {
        this._lazyLoad();
        this._reachBottom();
      };
    }
  },
  mounted () {
    /*
     * 实例化轮播
    */
    this.$nextTick()
      .then(() => {
        new Swiper('.top-swiper', {
          loop: true,
          autoplay:true,
          pagination: {
            el: '.swiper-pagination'
          }
        });   
        new Swiper('.join-swiper', {
          loop: true,
          autoplay:true
        });    
      });
    this.screenH = util.getScreenHeight();
    this.registerScrollEvent();
  }
}
</script>

<style lang="less">
  @import '~@/pages/common/index/index.less';
  @import '~@/style/common/variables.less';
  .carousel,
  .carousel-img {
    width: 100%;
    height: 185px;
  }
  // 更改组件样式
  .wh_indicator {
    bottom: 12px !important;
  }
  .wh_show_bgcolor {
    background: @main !important;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 14px !important;
  }
  .swiper-pagination-bullet-active {
    background: @main !important;
  }

  .nav-item {
    color: #323232;
    p {
      margin: 5px 0;
    }
  }
  .store-data__item {
    &:nth-child(1) {
      .data {
        color: #f44336;
      }
    }
    &:nth-child(2) {
      .data {
        color: #ffae1a;
      }
    }
    &:nth-child(3) {
      .data {
        color: #2196F3;
      }
    }
  }
</style>
