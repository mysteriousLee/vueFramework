(function (root){
	require('./less/module1.less');
	require('./less/module2.less');

	var module1 = require('./components/module1');
    var module2 = require('./components/module2');
    var module3 = require('./components/module3');

	var Vue = require('vue');
	var VueRouter = require('vue-router');
	Vue.use(VueRouter);

	var App = Vue.extend({});

	var router = new VueRouter();
        root.router = router;

	router.map({
		'/' : {
			component : module1 
		},
		'/home' : {
			component : module1,
			subRoutes : {
				'/' : {
					component : module2
				},
				'/child' : {
					component : module2
				},
				'/lala' : {
					component : module3
				}
			}
		}
	});

	router.start(App, '#app');
})(window);
