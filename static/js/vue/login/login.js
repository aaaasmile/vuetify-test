export default {
  data() {
    return {
      count: 0
    }
  },
  setup() {
    const theme = Vuetify.useTheme()
    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
  mounted() {
    console.log("Login component mounted.")
  },
  template: `
  <v-container>
    <v-col>
      <button v-on:click="count++">You clicked me {{ count }} times.</button>
      <v-icon icon="mdi:mdi-plus" />
      <v-icon icon="mdi:mdi-minus" />
      <v-icon icon="mdi:mdi-thermometer-plus" />
      <v-icon icon="mdi:mdi-abjad-hebrew" />
      <v-icon icon="mdi:mdi-account-cash" />
    </v-col>
    <v-row>
      <v-btn @click="toggleTheme">toggle theme</v-btn>
    </v-row>
  </v-container>`
}