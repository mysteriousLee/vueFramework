var template = require('./module2.html');

var module2Component = Vue.extend({
	template: template,
	data: function(){
		return {
			text: 'lala'
		}
	}
});
module.exports = module2Component;