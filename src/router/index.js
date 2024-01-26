import Vue from 'vue'
import VueRouter from 'vue-router'
import profile from '../views/profile.vue'
import authPage from '../views/auth-page.vue'
import stats from '../views/stats.vue'
import questionsPage from'../views/questions.vue'
import videoPage from '../components/auth-page/video-page.vue'
import dashbordAdmin from '../views/dashbord-admin.vue'
import ferstTestReporting from '../views/ferst-test.vue'
import lastTestReporting from '../views/lasttest.vue'
import lastTestingUser from '../views/anser-after-whatch.vue'
import signIn from'../components/auth-page/singinPage.vue'
import RegesterPage from '../components/auth-page/regester-page.vue'
import infoProgram from '../components/auth-page/info-program.vue'
import firstRegeser from '../components/auth-page/first-register.vue'
import  notSuccessful from '../components/auth-page/not-successful.vue'
import endShow from '../views/end-show.vue'
import thankPage from '../components/auth-page/thankYou.vue'
import successfulRejester from '../components/auth-page/successful.vue'
import viewingInstruction from '../components/auth-page/viewing-Instruction.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'authPage',
        component: authPage
    },
    {
        path:'/viewing-Instruction',
        name:'viewingInstruction',
        component:viewingInstruction
    },
    {
        path:'/thank-Page',
        name:'thankPage',
        component:thankPage
    },
    {
        path:'/end-of-the-experiment',
        name:'end-of-the-experiment',
        component:endShow
    },
    {
        path:'/not-successful',
        name:'notSuccessful',
        component:notSuccessful
    },
    {
        path:'/register-page/info-program/first-register',
        name:'firstRegeser',
        component:firstRegeser
    },
    {
        path:'/register-page/info-program',
        name:'infoProgram',
        component:infoProgram
    },
    {
        path:'/register-page',
        name:"RegesterPage",
        component:RegesterPage
    },
    {
        path:'/signin',
        name:'signin',
        component:signIn
    },
    {
        path:'/lastTestReporting',
        name:'lastTestReporting',
        component:lastTestReporting
    },
    {
        path:'/lastTestingUser',
        name:"lastTestingUser",
        component:lastTestingUser
    },
    {
        path:'/ferstTestReporting',
        name:'ferstTestReporting',
        component:ferstTestReporting
    },
    {
        path:'/registration-successful',
        name:'successful',
        component:successfulRejester
    },
    {
        path:'/videoPage',
        name:'videoPage',
        component:videoPage
    },
    {
        path:'/dashbordAdmin',
        name:'dashbordAdmin',
        component:dashbordAdmin
    },
    {
        path: '/questions-Page',
        name: 'questions',
        component: questionsPage
    },
    {
        path: '/profile',
        name: 'profile',
        component: profile
    },
    {
        path: '/stats',
        name: 'stats',
        component: stats
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router