import Vue from 'vue'
var com =  Vue.extend({
    template:'<h3>这是 mixin 中创建的组件</h3>'
}) 
Vue.component('com',com)

export default {
    data() {
        return {
            name: '--mixin name--',
            obj:{
                title:"minxin-title",
                desc:"minxin-desc"
            }
        }
    },
    components:{
        mixinCom:com
    }
    ,
    methods:{
        change(){
            this.name = "new Mixin"
        },
        mixinFn(){
            alert("mixinFn")
        },
        mixinFnName(n){
            alert(n)
        }
    },
    beforeCreate(){
        console.log("mixin beforeCreate")
    },
    created() {
        console.log("mixin created")
    },
    beforeMount() {
        console.log("mixin beforeMount")
    },
    mounted() {
        console.log("mixin mounted")
    },
    beforeUpdate() {
        console.log("mixin beforeUpdate")
    },
    updated() {
        console.log("mixin updated")
    },
    beforeDestroy() {
        console.log("mixin beforeDestroy")
    },
    destroyed() {
        console.log("mixin destroyed")
    }
}