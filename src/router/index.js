import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/Home.vue'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: home
        }
    ]
});

export default router
