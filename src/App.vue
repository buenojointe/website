<template>
  <div id="app">
    <Header/>

    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
    
    <Footer/>
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

@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.2';

*{
  transition: 1s;
}
#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F8F9FA;
  /* overflow-x: hidden, */
  
  
}

.page{
  position: absolute;
  width:inherit;

}



</style>


