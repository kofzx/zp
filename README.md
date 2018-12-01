# zp

> zp template

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

问题:
1. 获取undefined
2. 人物头像添加
3. 授权
4. 推广二维码

剩余:
1. 详情页收藏入口
2. 搜索 			√
	+ 接口对接
3. 设置（可设置）
4. 我的发布 + 我的收藏 + 意见版块 + 免费热线 + 在线客服 + 我要邀请
	+ 我的发布
	+ 我的收藏
	+ 意见版块 
	+ 免费热线 √
	+ 在线客服 √
	+ 我要邀请
5. 我的收藏
6. 关于我们
7. 意见反馈
8. 修改密码


更新 / 新增接口:
1. 搜索接口 - search
2. getIndex
3. 我的发布转店 - my_transfer
   我的发布找店 - my_seek
	+ shellModel
		->my_transfer
	+ buyModel
		->my_seek
4. 授权接口
	+ Login
		->getAccessToken
		->getopenid

	function
		->curl_post_contents
		->getAccessToken