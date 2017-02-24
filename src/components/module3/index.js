var template = require('./module3.html');

var module3Component = Vue.extend({
	template: template,
	methods: {
		clickOn: function(){
			alert('lahaha');
		}
	}
});
module.exports = module3Component;