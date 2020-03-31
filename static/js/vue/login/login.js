export default  Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  mounted(){
    console.log("Login component mounted.")
  },
  template: `
  <button v-on:click="count++">You clicked me {{ count }} times.</button>
`
})