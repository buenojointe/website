<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
    <Carrousel/>
  </div>
</template>


<script>

import Footer from './layoutcomponents/FooterComponent'
import Header from './layoutcomponents/HeaderComponent'


export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>


#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F8F9FA;
  /* overflow-x: hidden, */
  
}




</style>


