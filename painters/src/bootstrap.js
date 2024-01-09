import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import "./index.css";

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '',
        component: () => import('./Home.vue'),
    }, {
        path: '/velazquez',

    },
    {
        path: '/dali',
        component: () => import('./Dali.vue'),
    },
    {
        path: '/goya',

    }, {
        path: '/miro',

    }
    ],
});

Vue.use(VueRouter);

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");