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
	ASSIGN_SELECTORS: pgjApi + apiName + '/index/assign_selectors',
	ASSIGN_LOAD: pgjApi + apiName + '/index/assign_load',
	CASE_LOAD: pgjApi + apiName + '/index/case_load',
	JOIN_LOAD: pgjApi + apiName + '/index/league_load',
};