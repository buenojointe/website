<template>
<div>

  <b-container fluid class="bv-example-row">
    <b-row>
        <b-col >
          <h6 style="text-align:left; color:grey;">
          0.3 PORTFOLIO
          </h6>
        </b-col>
    </b-row>

    <!-- <div  transition="expand">hello</div>one -->
    
    <b-row>
        <b-col sm="3"><Credittoken/></b-col>
        <b-col sm="3"><Cryptoindex/></b-col>
        <b-col sm="3"><Machinelearning/></b-col>
        <b-col sm="3"><Dataprocessing/></b-col>
    </b-row>
    <b-row>
      <b-col sm="3"><Cryptotrading/></b-col>
      <b-col sm="3"><Digitalmarketing/></b-col>
    </b-row>
  </b-container>

    
  </div>
</template>

<script>

import Credittoken from './portfolio/Credittoken'
import Cryptoindex from './portfolio/Cryptoindex'
import Machinelearning from './portfolio/Machinelearning'
import Dataprocessing from './portfolio/Dataprocessing'
import Cryptotrading from './portfolio/Cryptotrading'
import Digitalmarketing from './portfolio/Digitalmarketing'


export default {
  name: 'Portfolio',
  components: {
    Credittoken,
    Cryptoindex,
    Machinelearning,
    Dataprocessing,
    Cryptotrading,
    Digitalmarketing,
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false,
      transitionName: 'fade'
      
    }
  }
}
</script>


<style scoped>

.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}
/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
</style>



