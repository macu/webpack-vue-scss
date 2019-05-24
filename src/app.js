import Vue from 'vue';

console.log('App script run');

import './app.scss';

import DemoComponent from './demo.vue';

const app = new Vue({
	el: '#app',
	components: {
		DemoComponent,
	},
});
