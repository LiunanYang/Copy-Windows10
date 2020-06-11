<template>
  <div id="app">
      <!-- <h1>我是子组件{{inputValue}}</h1> -->
      <p>count:{{this.$store.state.count}}</p>
      <button @click="add">子组件中 count+1</button>
      <h1>{{this.$store.state.name}}</h1>
      <h1>{{this.$store.getters.formatName}}</h1>
  </div>
</template>

<script>
import mixin from "@/mixin/mixin"
export default {
  mixins:[mixin],
  name: 'child',
  props:{
    inputValue:{
      type:String,
      default:'默认',
      // required:true
    }
  },
  data() {
    return{
        name:"子组件"
    }
  },
  methods:{
      add(){
        this.$store.commit("increment")
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
