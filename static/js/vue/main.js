import Login from './login/login.js'
//import createVuetify from 'vuetify'
//import VueRouter from 'vuerouter'

const routes = [
  { path: '/login', component: Login }
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

//const vuetify = createVuetify()

export const app = Vue.createApp({
  data() {
    return {
    }
  },
  mounted: function () {
    // `this` points to the vm instance
    this.Buildnr = window.buildnr
  },
  template: `
  <v-app>
    <v-toolbar>
      <v-toolbar-title>
        <v-btn >Test app</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/login">Navigate to Login</router-link>
      <v-toolbar-items class="hidden-sm-and-down"></v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
`
})

//app.use(vuetify)
app.use(router)
app.mount('#app')
console.log('Main is here!', window.buildnr)