require('./bootstrap')

window.Vue = require('vue')

import router from './router'

Vue.component('app-component', require('./components/app.vue').default)

const app = new Vue({
    el : '#app',
    router
});
