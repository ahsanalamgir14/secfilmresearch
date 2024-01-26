import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import "vue-toastification/dist/index.css"
import axios from 'axios'
import VueAxios from 'vue-axios'
import Toast from 'vue-toastification'
// import VuePlyr from 'vue-plyr'
// import 'vue-plyr/dist/vue-plyr.css'

Vue.use(Toast, {
    transition: 'Vue-Toastification__fade',
    maxToasts: 20,
    newestOnTop: true
  })
  

Vue.config.productionTip = false;
// axios
Vue.use(VueAxios, axios);
// Vue.use(VuePlyr, {
//     plyr: {}
//   })
// sweet alert config
const options = {
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
};
Vue.use(VueSweetalert2, options);


new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')