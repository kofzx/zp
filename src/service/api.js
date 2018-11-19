export const apiName = '/api';

export const ytApi = 'https://ytxcx.6mo.cc';
export const gsApi = 'https://gs.6mo.cc';
export const pgjApi = 'http://www.pgj.com';

export const api = {
	STROE_LIST: '/Wxapi/News/getMore',
	TRADE_ARRAY: '/area.html'
};

export const fullApi = {
	STROE_LIST: ytApi + '/Wxapi/News/getMore',
	TRADE_ARRAY: gsApi + '/area.html',
	INDEX_DATA: pgjApi + apiName + '/index/getIndex',
	CITY_LIST: pgjApi + apiName + '/index/citylist',
	ASSIGN_INIT: pgjApi + apiName + '/index/assign_init',
	ASSIGN_LOAD: pgjApi + apiName + '/index/assign_load',
	CASE_INIT: pgjApi + apiName + '/index/case_init',
	JOIN_INIT: pgjApi + apiName + '/index/league_init',
	KEFU_INIT: pgjApi + apiName + '/index/kefu_init',
	NEWS_INIT: pgjApi + apiName + '/index/news_init',
	NEWS_LOAD: pgjApi + apiName + '/index/news_load',
	LOGIN: pgjApi + apiName + '/index/login_ko',
	LOGOUT: pgjApi + apiName + '/index/logout',
	SEND_CODE: pgjApi + apiName + '/index/sendcode',
	RESET_PWD: pgjApi + apiName + '/index/forgetpwd',
	REGISTER: pgjApi + apiName + '/index/register_ko',
};