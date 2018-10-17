<template>
  <b-container style="padding:0;margin:0">
    <!-- landing -->
    <dir style="height:5px; width:100%; z-index:100;"></dir>
    <HomeComponent/>
    <AboutComponent/>
    <ProductsComponent/>
    <PortfolioComponent/>
    <ContactsComponent/>
  </b-container>

</template>

<script>

import HomeComponent from './../components/HomeComponent';

import AboutComponent from './../components/AboutComponent';
import ProductsComponent from './../components/ProductsComponent';
import PortfolioComponent from './../components/PortfolioComponent';
import ContactsComponent from './../components/ContactsComponent';


export default {
  name: 'Landing',
  components:{
    HomeComponent,AboutComponent,ProductsComponent,PortfolioComponent,ContactsComponent
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
