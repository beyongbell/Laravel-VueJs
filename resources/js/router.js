import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import firstPage from './components/pages/First.vue'

const routes = [
    {
        path: '/router',
        component: firstPage
    }
]

export default new Router({
    mode: 'history',
    routes
})
