require('./bootstrap');

window.Vue = require('vue');

Vue.component('app-component', require('./components/app.vue').default);

const app = new Vue({
    el : '#app'
});
