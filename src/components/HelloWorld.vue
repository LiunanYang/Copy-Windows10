<template>
  <div id="app">
    <!-- <child ref="child" :input-value="msg" @func="formChild"></child> -->
    <button @click="popOne">点击弹出1</button>
  </div>
</template>

<script>
import child from "./child"
import Vue from "vue"
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return{
      msg:"hello",
    }
  },
  components:{
    // child:child
  },
  computed:{
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
    popOne(){
      alert("1")
    },
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
  beforeCreate(){
    console.log("--home--beforeCreate")
  },
  created(){
    console.log("--home--created")
  },
  beforeMount(){
    console.log("--home--beforeMount")
  },
  mounted(){
    console.log("--home--mounted")
  },
  beforeUpdate(){
    console.log("--home--beforeUpdate")
  },
  updated(){
    console.log("--home--updated")
  },
  beforeDestroy(){
    alert("确定退出?")
    console.log("--home--beforeDestroy")
  },
  destroyed(){
    console.log("--home--destroyed")
  }
}
</script>
