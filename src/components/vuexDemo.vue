<template>
    <div>

    </div>
</template>

<script>
export default{
    // state
    data(){
        return{
            count:0
        }
    },
    // view
    template:`<div>{{ count }}</div>`,
    // action
    methods:{
        increment(){
            this.count++
        }
    }
}
</script>