import Vue from 'vue'; // 引入vue
import Router from 'vue-router'; // 引入vue-router

import Foo from './components/foo/foo'; // 引入foo模块
import Bar from './components/bar/bar'; // 引入bar模块

Vue.use(Router);

const router = new Router();

router.map({
	'/foo': {
		component: Foo
	},
	'/bar': {
		component: Bar
	}
});

let App = Vue.extend({});
router.start(App, '#app');