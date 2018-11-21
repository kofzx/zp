export default {
	methods: {
		makeCall (phone) {
	      wx.makePhoneCall({
	        phoneNumber: phone
	      });
	    }
	}
}