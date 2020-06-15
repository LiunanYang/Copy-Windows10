<template>
  <div id="app">
    <!-- <child ref="child" :input-value="msg" @func="formChild"></child> -->
    <button @click="mockFn">试一试 mockjs</button>
    <ul>
      <li v-for="(i,v) in mockObj">{{i}}---{{v}}</li>
    </ul>
  </div>
</template>

<script>
import child from "./child"
import Vue from "vue"
import {mapState}from 'vuex'
import {mapGetters}from 'vuex'
export default {
  name: 'HelloWorld',
  myOption: '组件里的myOption选项',
  data() {
    return{
      msg:"hello",
      num:0,
      name:"data 中的name",
      mockObj:{},
      obj:{
        name:"objB",
        sayWorld(){
          console.log('world')
        }
      }
    }
  },
  created(){
    console.log(this.$options.myOption)
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
      argsName1:'argsName'
    })
  },
  methods:{
    merge(){
      console.log(this.$options.myOption)
    },
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
          console.log(res.data.data)
          this.mockObj = res.data.data
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