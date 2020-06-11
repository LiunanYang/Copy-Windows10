<template>
  <div id="app">
    <router-link to="/child">child</router-link>
    <router-link to="/">home</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
