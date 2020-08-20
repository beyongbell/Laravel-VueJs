import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import firstPage from './components/pages/First.vue'
import hook from './components/pages/basic/hooks.vue'

const routes = [
    {
        path: '/router',
        component: firstPage
    },

    // Vue Hook
    {
        path: '/hook',
        component: hook
    }
]

export default new Router({
    mode: 'history',
    routes
})
