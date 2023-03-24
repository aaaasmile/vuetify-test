export default {
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    console.log("Login component mounted.")
  },
  template: `
  <v-col>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
    <v-icon icon="mdi:mdi-plus" />
    <v-icon icon="mdi:mdi-minus" />
    <v-icon icon="mdi:mdi-thermometer-plus" />
    <v-icon icon="mdi:mdi-abjad-hebrew" />
    <v-icon icon="mdi:mdi-account-cash" />
  </v-col>`
}