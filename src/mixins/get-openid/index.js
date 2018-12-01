import { fullApi } from '@/service/api'

export default {
	methods: {
		getOpenId (code) {
			return new Promise((resolve, reject) => {
				this.$flyio.get(fullApi.OPENID, {
					code: code
				})
					.then(res => {
						resolve(res);
					});
			});
		}
	}
}