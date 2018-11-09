export default window ? {
	makePhoneCall: function(object) {
		window.location.href = 'tel:' + object.phoneNumber;
	}
} : wx;