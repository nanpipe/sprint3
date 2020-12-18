// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import router from './router'

import VueFormGenerator from 'vue-form-generator'

Vue.use(VueFormGenerator);


Vue.use(vueRouter)
Vue.config.productionTip = false
new Vue({
router,
el: '#app',
components: { App },
template: '<App/>'
})
