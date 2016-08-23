import $ from 'jquery';
import Vue from 'vue';
import Router from 'vue-router';

import Foo from './components/foo/foo';
import Bar from './components/bar/bar';

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