import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    name:"liunan",
    one:"one",
    two:"two"
  },
  mutations: {
    increment(state) {
      state.count++
    },
    addNum(state,obj){
        state.count+=obj.num
    },
    // addNum(state,num){
    //   state.count+=num
    // }
  },
  actions:{
    incrementAsync(context,obj){
      setTimeout(()=>{
        context.commit('addNum',{
          num:obj.num
        })
        
        // context.commit({
        //   type:'addNum',
        //   num:obj.num
        // })

        // context.commit('addNum',num)
      },2000)
    }
  },
  getters:{
    formatCount(s){
      return s.count+"个"
    },
    formatName(state,g){
      var desc = ""
      var name = state.name
      if(name =="liunan"){
        desc = "是小仙女"
      }
      return name + desc + "，现在是第"+ g.formatCount
    },
    argsName(state){
      var name = state.name
      return (a)=>{
        return name + a
      }
    }
  }
})
export default store