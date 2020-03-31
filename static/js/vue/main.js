import Login from './login/login.js'

const routes = [
  { path: '/login', component: Login }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

export const app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify(),
    data() {
      return{
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
  </v-app>`
})

console.log('Main is here!', window.buildnr)