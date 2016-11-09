import Vue from 'vue'; // 引入vue
import Router from 'vue-router'; // 引入vue-router

Vue.use(Router);

import App from '../components/app/app'; // 引入app模块
import Foo from '../components/foo/foo'; // 引入foo模块
import Bar from '../components/bar/bar'; // 引入bar模块

const router = new Router({
	mode: 'history',
	routes: [{
		path: '/foo',
		name: 'foo',
		component: Foo
	}, {
		path: '/bar',
		name: 'bar',
		component: Bar
	}, {
		path: '/',
		redirect: '/foo'
	}]
});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});