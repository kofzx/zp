import validates from '../strategies/validates.js'

/**
 * 表单验证类
 */
class Validator {
	constructor () {
		this.cache = [];	// 保存校验规则
	}
  /**
   * @param value:   待验证的值
   * @param rule:    验证策略
   * @param errMsg:  验证失败提示信息
   */
  add(value, rules) {
    for (let i = 0, rule; rule = rules[i++];) {
      let strategyArr = rule.strategy.split(':');		// 把strategy和参数分开
      let errMsg = rule.errMsg;
      this.cache.push(() => {
        let strategy = strategyArr.shift();		// 用户挑选的strategy
        strategyArr.unshift(value);		// 把input.value添进参数列表
        strategyArr.push(errMsg);		// 把errMsg添进参数列表
        return validates[strategy].apply(this, strategyArr);
      });
    }
  }
  /**
   * 启动验证
   */
	start () {
		for (let i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
			let msg = validatorFunc();
			if (msg) return msg;
		}
	}
}

export default Validator