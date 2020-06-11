<template>
  <div id="app">
    <!-- <child ref="child" :input-value="msg" @func="formChild"></child> -->
    <p>vuex的值：{{ this.$store.state.count }}</p>
    <button @click="add">父组件中 count+1</button>
    <input type="text" v-model="num">
    <button @click="addNum">count + {{num}}</button>
    <button @click="addAsync">异步count+1</button>
    
    <!-- <h1>{{this.$store.getters.formatName}}</h1>
    <h1>{{this.$store.getters.argsName("太可爱辣")}}</h1> -->
    <h1>{{name}}</h1>
    <h1>{{argsName1("太可爱辣")}}</h1>
    <p>{{count}}</p>
    <p>{{one}}</p>
    <p>{{two}}</p>
    <p>{{msgNew}}</p>
    <button @click="mockFn">试一试 mockjs</button>
  </div>
</template>

<script>
import child from "./child"
import Vue from "vue"
import mixin from "@/mixin/mixin"
import {mapState}from 'vuex'
import {mapGetters}from 'vuex'
export default {
  name: 'HelloWorld',
  mixins:[mixin],
  data() {
    return{
      msg:"hello",
      num:0,
      name:"data 中的name"
    }
  },
  components:{
    // child:child
  },
  computed:{
    msgNew(){
      return this.msg + "~"
    },
    ...mapState([
      'count',
      'one',
      'two'
    ]),
    ...mapGetters({
      test:'formatCount',
      name:'formatName',
      argsName1:'argsName'
    })
  },
  methods:{
    add(){
      this.$store.commit('increment')
    },
    addNum(){
      // this.$store.commit('addNum',{
      //   num:parseInt(this.num)
      // })
      this.$store.commit({
        type:'addNum',
        num:parseInt(this.num)
      })
    },
    // addAsync(){
    //   this.$store.dispatch("incrementAsync",{
    //     num:100
    //   })
    // }
    addAsync(){
      this.$store.dispatch({
        type:"incrementAsync",
        num:50
      })
    },
    // addAsync(){
    //   this.$store.dispatch("incrementAsync",50)
    // }
    mockFn(){
      var loginMode = 'msdk';
      var url = '/mock';
      this.$axios.get(url)
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  // beforeCreate(){
  //   console.log("beforeCreate")
  // },
  // created(){
  //   console.log("created")
  // },
  // beforeMount(){
  //   console.log("beforeMount")
  // },
  // mounted(){
  //   console.log("mounted")
  // },
  // beforeUpdate(){
  //   console.log("beforeUpdate")
  // },
  // updated(){
  //   console.log("updated")
  // },
  // beforeDestroy(){
  //   console.log("beforeDestroy")
  // },
  // destroyed(){
  //   console.log("destroyed")
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>