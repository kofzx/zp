<template>
  <div class='index-wrapper'>
    <div class="top-wrapper container row">
        <!-- 定位 -->
        <navigator class="top-wrapper__url white" hover-class='none' url="/pages/min/ding/main">东莞</navigator>
        <div class="flex-1">
          <!-- 搜索 -->
          <search-box 
            ss-color='189ccd' 
            :has-ding='true' 
            :is-jump='true' 
            jump-url='/pages/min/ding/main'
            placeholder='找店铺/找项目'>
              <a href="/pages/min/ding/main" hover-class='none' class="white ml-10">搜索</a>
          </search-box>
        </div>
    </div>
    <!-- 轮播 -->
    <swiper class='carousel swiper-box' autoplay circular indicator-dots>
      <swiper-item 
        v-for='(item, index) in carousel' 
        :key='index'>
        <img class='carousel-img' :src='img_url + item.pic_path' />
      </swiper-item>
    </swiper>
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
        :news-list='urgentList'
        news-title-field='title'
        news-time-field='finishtime'
        news-src-field='images_path' />
    </section>
    <!-- 店铺数据 -->
    <!-- <section class="store-data zp-container container row">
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
    </section> -->
    <!-- 精准发布 -->
    <!-- <section class="publish zp-container">
      <div class="publish__title title-grp container row">
        <p class="f16">精准发布</p>
        <p>已匹配 <span class="light-color">4371</span>次</p>
      </div>
      <div class='container row'>
        <a 
          href='/pages/min/assign-form/main'
          class="publish__store container row center flex-1">
          <img src="https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png" alt="">
          <div class="tc">
            <p>我要转铺</p>
            <p class="publish__desc f12">快速转让店铺</p>
          </div>
        </a>
        <a 
          href='/pages/min/seek-form/main'
          class="publish__store container row center flex-1">
          <img src="https://7n.w3cschool.cn/attachments/day_161010/201610101756173797.png" alt="">
          <div class="tc">
            <p>我要选址</p>
            <p class="publish__desc f12">找到心怡店铺</p>
          </div>
        </a>
      </div>
    </section> -->
    <!-- 在线客服 -->
    <section class="online zp-container" style="margin-top: 0">
      <!-- 标题 -->
      <div class="title-grp container row">
        <p class="f16">在线咨询</p>
        <a class=''>查看更多 &gt; </a>
      </div>
      <div class="container row">
          <a 
            class='flex-1 tc' hover-class='none' 
            v-for='(item, index) in customer' 
            :key='index'>
            <img 
              class="online__avator inb" 
              :src="img_url + item.headimg">
            <p class="online__name inb">{{item.name}}</p>
          </a>
      </div>
    </section>
    <!-- 项目加盟 -->
    <!-- <section class="join zp-container">
      <div class="title-grp container row">
        <p class="f16">招商加盟</p>
        <a class=''>查看更多 &gt; </a>
      </div>
      <swiper class='join__carousel' autoplay circular>
        <swiper-item 
          class='join__carousel__item container row' 
          v-for='(item, index) in league' 
          :key='index'>
          <img :src="img_url + item.pic_path" />
          <div class="flex-1">
            <h2 class="title">{{item.title}}</h2>
            <p class="desc f12">{{item.description}}</p>
            <p class="f12 light-color">{{item.money}}</p>
          </div>
        </swiper-item>
      </swiper>
    </section> -->
    <!-- 推荐店铺 -->
    <section class="like zp-container">
      <!-- 标题 -->
      <div class="title-grp container row">
        <p class="f16">推荐店铺</p>
        <a class=''>查看更多 &gt; </a>
      </div>
      <!-- 商铺列表 -->
      <store-item v-for='(item, index) in normalList' :key='index'
        color='189ccd'
        :url="'/pages/min/assign-detail/main?id=' + item.id"
        :src='img_url + item.images_path'
        :title='item.title'
        :area='item.area'
        :cate='item.cat_name'
        :rental='item.rent'
        :time='item.addtime'
        :tags='item.tags'
        tag-field='name'>
      </store-item>
    </section>
    <!-- 成功案例 -->
    <section class="like zp-container">
      <!-- 标题 -->
      <div class="title-grp container row">
        <p class="f16">成功案例</p>
        <a class=''>查看更多 &gt; </a>
      </div>
      <!-- 商铺列表 -->
      <store-item v-for='(item, index) in finishList' :key='index'
        color='189ccd'
        :url="'/pages/min/assign-detail/main?id=' + item.id"
        :src='img_url + item.images_path'
        :title='item.title'
        :area='item.area'
        :cate='item.cat_name'
        :rental='item.rent'
        :time='item.addtime'
        :tags='item.tags'
        tag-field='name'>
      </store-item>
    </section>
    <section class="expect">
        <p>更多内容，敬请期待</p>
        <p></p>
    </section>
    <!-- <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a> -->
  </div>
</template>

<script>
import Index from '@/pages/common/index/index'

import wx from 'wx'
import localData from '@/pages/common/index/localData'
import { pgjApi, fullApi } from '@/service/api'

import storeItem from '@/components/core/common/store-item/index'
import searchBox from '@/components/core/min/search-box/index'
import headline from '@/components/core/min/headline/index'

export default {
  mixins: [Index],
  data() {
    return {
      navBar: localData.navBar,
      img_url: pgjApi,
      carousel: [],
      customer: [],
      finishList: [],
      normalList: [],
      urgentList: [],
      league: []
    }
  },
  components: {
    'search-box': searchBox,
    'store-item': storeItem,
    headline
  },
  methods: {
    getStoreList (cat_id = 40, page = 1) {
      return new Promise((resolve) => {
        this.$flyio.request(fullApi.STROE_LIST, {
                cid: cat_id,
                p: page
              })
              .then(res => {

                let storeList = res.data.news;

                if (storeList == null || storeList == 'undefined') return;
                
                this.storeList = storeList;

                resolve(storeList);
              });
      });
    },
    fetchIndex () {
      this.$flyio.get(fullApi.INDEX_DATA)
        .then(res => {

          let { carousel, customer, is_finish, is_normal, is_urgent, league } = res.data;
          this.carousel = carousel;
          this.customer = customer;
          this.finishList = is_finish;
          this.normalList = is_normal;
          this.urgentList = is_urgent;
          this.league = league;
        });
    },
  },
  created () {
    // this.getStoreList();
    this.fetchIndex();
  }
}
</script>

<style lang="less">
  @import '~@/pages/common/index/index.less';
  @import '~@/style/min/swiper.less';
</style>
