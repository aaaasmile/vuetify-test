import Login from './login/login.js'


const routes = [
  { path: '/login', component: Login }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const vuetify = Vuetify.createVuetify({
  theme: {
    defaultTheme: 'dark'
  }
})

const pinia = Pinia.createPinia()

export const app = Vue.createApp({
  data() {
    return {
      Buildnr: ''
    }
  },
  mounted: function () {
    this.Buildnr = window.buildnr
  },
  template: `
  <v-app>
    <v-toolbar>
      <v-toolbar-title>
        <div>{{ Buildnr }}</div>
        <v-btn>Test app</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/login">Navigate to Login</router-link>
      <v-toolbar-items class="hidden-sm-and-down"></v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
`
})

app.use(vuetify)
app.use(router)
app.use(pinia)
app.mount('#app')
console.log('Main is here!', window.buildnr)