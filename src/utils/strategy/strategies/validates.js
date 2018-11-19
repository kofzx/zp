var validates = {
	isNonEmpty: function (value, errMsg) {
		if (value === '') {
			return errMsg;
		}
	},
	minLength: function (value, length, errMsg) {
		if (value.length < length) {
			return errMsg;
		}
	},
	isPhoneNumber: function (value,  errMsg) {
		if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
			return errMsg;
		}
	},
  isIdentity: function (value, errMsg) {
    if (!/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value)) {
      return errMsg;
    }
  },
  isBank: function (value, errMsg) {
    if (!/([1-9]{1})(\d{14}|\d{18})/.test(value)) {
      return errMsg;
    }
  }
};

export default validates