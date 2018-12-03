// export const apiName = '/api';
export const apiName = '/api/index';

export const ytApi = 'https://ytxcx.6mo.cc';
export const gsApi = 'https://gs.6mo.cc';
// export const pgjApi = 'https://www.puguanjiacn.com';
export const pgjApi = 'http://www.pgj.com';
export const pgjImg = pgjApi + '/pgj.jpg';

export const api = {
	STROE_LIST: '/Wxapi/News/getMore',
	TRADE_ARRAY: '/area.html'
};

export const fullApi = {
	STROE_LIST: ytApi + '/Wxapi/News/getMore',
	TRADE_ARRAY: gsApi + '/area.html',
	// UPLOAD: gsApi + '/upload.html',
	OPENID: pgjApi + apiName + '/login/getopenid',
	INDEX_DATA: pgjApi + apiName + '/getIndex',
	CITY_LIST: pgjApi + apiName + '/citylist',
	ASSIGN_INIT: pgjApi + apiName + '/assign_init',
	ASSIGN_LOAD: pgjApi + apiName + '/assign_load',
	ASSIGN_ADD: pgjApi + apiName + '/shell_add',
	SEEK_ADD: pgjApi + apiName + '/buy_add',
	CASE_INIT: pgjApi + apiName + '/case_init',
	JOIN_INIT: pgjApi + apiName + '/league_init',
	KEFU_INIT: pgjApi + apiName + '/kefu_init',
	NEWS_INIT: pgjApi + apiName + '/news_init',
	NEWS_LOAD: pgjApi + apiName + '/news_load',
	LOGIN: pgjApi + apiName + '/login_ko',
	LOGOUT: pgjApi + apiName + '/logout',
	SEND_CODE: pgjApi + apiName + '/sendcode',
	RESET_PWD: pgjApi + apiName + '/forgetpwd',
	REGISTER: pgjApi + apiName + '/register_ko',
	UPLOAD: pgjApi + apiName + '/uploadimage',
	REGION: pgjApi + apiName + '/region_ko',
	SEARCH: pgjApi + apiName + '/search',
	MY_ASSIGN: pgjApi + apiName + '/my_transfer',
	MY_SEEK: pgjApi + apiName + '/my_seek',
	QRCODE: pgjApi + apiName + '/qrcode',
	COLLECT: pgjApi + apiName + '/collect',
};