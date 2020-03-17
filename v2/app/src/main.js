// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
export const bus = new Vue();
import Vuex from 'vuex'
import store from './store'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.use(PerfectScrollbar)

Vue.config.productionTip = false

const vuetifyOptions = {
	icons: {
    	iconfont: 'md'
	}
}

Vue.use(Vuetify)

Vue.use(Vuex)

new Vue({
	router,
	store,
	render: (h) => h(App),
  	vuetify: new Vuetify(vuetifyOptions),
  	computed: {
	  loading() {
	    return store.state.application.loading.active;
	  }
	}
}).$mount('#app')