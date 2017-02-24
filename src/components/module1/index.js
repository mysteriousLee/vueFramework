var template = require('./module1.html');

var module1Component = Vue.extend({
	template : template,
	data : function(){
		return {
			text : 'haha'
		}
	}
});
module.exports = module1Component;

