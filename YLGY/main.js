import uview from 'uview-plus';

import { createPinia } from 'pinia';

import App from './App.vue'

import { createSSRApp } from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(uview)
	app.use(createPinia());
	return {
		app
	}
}
