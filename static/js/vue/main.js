export const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
    },
    template: `
    <v-app>
        <div class="home">
            <h2>Testing Vuetify</h2>
            <p class="red">Lorem</p>
            <p class="headline">this is a headline</p>
        </div>
    </v-app>
    `
})

console.log('Main is here!')