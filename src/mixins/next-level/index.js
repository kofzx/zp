export default {
	methods: {
		nextLevel (array, name, col, val) {
		  let obj = array[col][val];
		  if (typeof obj == 'object') {
		  	if (name in obj) {
			    if (obj[name]) {
			      this.$set(array, ++col, obj[name]);
			      this.nextLevel(array, name, col, 0);
			    }
			}
		  }
		}
	}
}