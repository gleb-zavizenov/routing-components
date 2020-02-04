// create a couple of componentswe canrequest and render
let SplashComponent = {
    template: `<h1>Welcome to my super awesome app!</h1>`
}

let AppComponent = {
    template: `<h1>This is the app page</h1>`
}

let ErrorComponent = {
    template: `<h1>Error!</h1>`
}

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