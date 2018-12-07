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
3. 懒加载优化

剩余:
2. 搜索
	+ 接口对接
3. 设置（可设置）
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
5. 收藏接口 - collect
	# + shellModel
	#	 ->collect
	#	 ->_collect
	collectModel
6. 查询详情收藏接口 - is_collect
7. 建议接口 - suggest
	suggestModel

18/12/7
1. api
	->sendcode
	->forgetpwd
