<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app, html {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: auto!important;
}
.section-title {
	font-weight: 400px;
	text-align: center;
}
.terminal-box {
	border: 3px solid black;
	width: 84%;
	padding: 10px;
	margin: 50px;
}
</style>
