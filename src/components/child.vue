<template>
  <div id="app">
      <h1>我是子组件：{{inputValue}}</h1> 
  </div>
</template>

<script>
import mixin from "@/mixin/mixin"
export default {
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
    }
  },
  methods:{
      add(){
        this.$store.commit("increment")
      }
  },
    beforeCreate(){
    console.log("--child--beforeCreate")
  },
  created(){
    console.log("--child--created")
  },
  beforeMount(){
    console.log("--child--beforeMount")
  },
  mounted(){
    console.log("--child--mounted")
  },
  beforeUpdate(){
    console.log("--child--beforeUpdate")
  },
  updated(){
    console.log("--child--updated")
  },
  beforeDestroy(){
    alert("确定退出?")
    console.log("--child--beforeDestroy")
  },
  destroyed(){
    console.log("--child--destroyed")
  }

  
}
</script>
