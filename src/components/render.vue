<template>
    <div id="container">
        <p>{{mixinAll}}</p>
        <h1>
            <a href="#">
            Hello world!
            </a>
        </h1>
        <tb-heading :level="1" >
            <p href="#" @click="fn">Hello world!</p>
        </tb-heading>
        <tb-heading :level="2">
            <a href="#">Hello world!</a>
        </tb-heading>
        <tb-heading :level="3">
            <a href="#">Hello world!</a>
        </tb-heading>
    </div>
</template>

<script>
import Vue from "vue"
Vue.component('tb-heading', {
    render: function(createElement) {
        return createElement(
            'h' + this.level,
            [
            createElement('a', {
                attrs: {},
                style: {
                    color: 'red',
                    fontSize: '20px'
                },
                'class': {
                    foo: true,
                    bar: false
                },
                // DOM属性
                domProps: {
                    innerHTML: 'baz'
                },
                // 组件props
                props: {
                    myProp: 'bar'
                },
                // 事件监听基于 'on'
                // 所以不再支持如 'v-on:keyup.enter' 修饰语
                // 需要手动匹配 KeyCode  
                on: {
                    click: function(event) {
                        event.preventDefault();
                        console.log(111);
                    }
                }
            }, this.$slots.default)
            ]
        ) 
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
});

export default{
    name:"render",
    data(){
        return{

        }
    },
    methods:{
        fn(){
            console.log(this.$slots)
        }
    }
}
</script>   