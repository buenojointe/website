<template>
<div>

  <b-container fluid class="bv-example-row">
    <b-row>
        <b-col >
          <h6 style="text-align:left; color:grey;">
          0.4 PORTFOLIO
          </h6>
        </b-col>
    </b-row>
    <b-row>
        <b-col sm="3"><Credittoken/></b-col>
        <b-col sm="3"><Cryptoindex/></b-col>
        <b-col sm="3"><Machinelearning/></b-col>
    </b-row>
  </b-container>

    
  </div>
</template>

<script>

import Credittoken from './portfolio/Credittoken'
import Cryptoindex from './portfolio/Cryptoindex'
import Machinelearning from './portfolio/Machinelearning'


export default {
  name: 'Portfolio',
  components: {
    Credittoken,
    Cryptoindex,
    Machinelearning,
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
      
    }
  }
}
</script>


<style scoped>


</style>



