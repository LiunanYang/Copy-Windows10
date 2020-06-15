<template>
  <div id="app">
      <h1>我是子组件{{inputValue}}</h1> 
      <p>{{mixinAll}}</p>
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
        name:"子组件",
        mixinAll:"child 中的 mixinAll"
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
