// export const apiName = '/api_';
export const apiName = '/mobile/api/';

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
	// OPENID: pgjApi + apiName + '/login_getopenid',
	// QRCODE: pgjApi + apiName + '/qrcode',
	INDEX_DATA: pgjApi + apiName + 'getIndex',
	CITY_LIST: pgjApi + apiName + 'citylist',
	ABOUT: pgjApi + apiName + 'about_ko',
	ASSIGN_INIT: pgjApi + apiName + 'assignInit',
	ASSIGN_LOAD: pgjApi + apiName + 'assignLoad',
	ASSIGN_ADD: pgjApi + apiName + 'shellAdd',
	SEEK_ADD: pgjApi + apiName + 'buyAdd',
	CASE_INIT: pgjApi + apiName + 'caseInit',
	JOIN_INIT: pgjApi + apiName + 'leagueInit',
	KEFU_INIT: pgjApi + apiName + 'kefuInit',
	NEWS_INIT: pgjApi + apiName + 'newsInit',
	NEWS_LOAD: pgjApi + apiName + 'newsLoad',
	LOGIN: pgjApi + apiName + 'loginKo',
	LOGOUT: pgjApi + apiName + 'logout',
	SEND_CODE: pgjApi + apiName + 'sendcode',
	RESET_PWD: pgjApi + apiName + 'forgetpwd',
	UPDATE_PWD: pgjApi + apiName + 'updatePwd',
	REGISTER: pgjApi + apiName + 'registerKo',
	UPLOAD: pgjApi + apiName + 'uploadimage',
	REGION: pgjApi + apiName + 'regionKo',
	SEARCH: pgjApi + apiName + 'search',
	MY_ASSIGN: pgjApi + apiName + 'myTransfer',
	MY_SEEK: pgjApi + apiName + 'mySeek',
	COLLECT: pgjApi + apiName + 'collect',
	IS_COLLECT: pgjApi + apiName + 'isCollect',
	COLLECT_LIST: pgjApi + apiName + 'collectList',
	SUGGEST: pgjApi + apiName + 'suggest',
	MODIFY_INFO: pgjApi + apiName + 'modify_info',
	USERINFO: pgjApi + apiName + 'userinfo',
};