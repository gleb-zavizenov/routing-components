// importing all components
import SplashComponent from './modules/SplashComponent.js';
import AppComponent from './modules/AppComponent.js';
import ErrorComponent from './modules/ErrorComponent.js';

// these are the same as Express routes -> router.get('/', ...)
const routes = [
    { path: '/', name:'splash', component: SplashComponent},
    { path: '/app', name:'app', component: AppComponent},
    { path: '*', name:'error', component: ErrorComponent}
]

const router = new VueRouter({
    routes
})

const vm = new Vue({
    el: "#app",
    data: {

    },
    methods: {

    },
    router
})