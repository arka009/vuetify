// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import Vuetify from 'vuetify'
import './stylus/main.styl'

import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
    created() {
        firebase.initializeApp({
            apiKey: "AIzaSyAIpELTKsJcnsb309MlggSkhH3OztDikso",
            authDomain: "myvuetify.firebaseapp.com",
            databaseURL: "https://myvuetify.firebaseio.com",
            projectId: "myvuetify",
            storageBucket: "",
        })
    }
})