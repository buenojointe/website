<template>
  <div>
  <b-card class="mb-2">

    <b-img style="width:150px" src="static/portfolio/brain.png" fluid alt="Responsive image" />

    <h4 class="red">MACHINE LEARNING</h4>
    <h1 class="red">&</h1>
    <h4 class="red">NEURAL NETWORKS</h4>

  <br>
  <table style="text-align:left">
      <tr>
        <th style="padding-top:7px;vertical-align: top;">
          <div style="width:0.5rem; height:70px; background-color: black;"></div>
        </th>
        <th style="padding-left:10px">
          <h4 style="font-weight:bold;">We create and implement</h4>
          <p style="font-weight:400">various machine learning  algorithms, including those based on the principles of biological neural networks.</p>
        </th>
        
      </tr>
      <tr>
        <th style="width:0.5rem;">

        </th>
        <th style="padding-left:10px">
          <h4 style="text-align:left">Our experience & expertise include:</h4>
        </th>

      </tr>
  </table>
  <br>
  <table>
    <tr>
      <th>
        <span class="dot"></span>
      </th>
      <th style="text-align:left">
        <h5>Systems for recognition and</h5>
        
      </th>
    </tr>
    <tr>
      <th>
        <span class="notdot"></span>
      </th>
      <th style="text-align:left">
        <h5>classification of objects</h5>
      </th>
    </tr>
  </table>
  <br>
  <table>
    <tr>
      <th>
        <span class="dot"></span>
      </th>
      <th style="text-align:left">
        <h5>Predictive & prescriptive</h5>
      </th>
    </tr>
    <tr>
      <th>
        <span class="notdot"></span>
      </th>
      <th style="text-align:left">
        <h5>analytic Algorithms</h5>
      </th>
    </tr>
  </table>
  <br>
  <table>
    <tr>
      <th>
        <span class="dot"></span>
      </th>
      <th style="text-align:left">
        <h5>Intellectual Security</h5>
      </th>
    </tr>
    <tr>
      <th>
        <span class="notdot"></span>
      </th>
      <th>
        <h5>systems & monitoring</h5>
      </th>
    </tr>
  </table>
  <br>
  <table>
    <tr>
      <th>
        <span class="dot"></span>
      </th>
      <th style="text-align:left">
        <h5>Self-learning control</h5>
      </th>
    </tr>
    <tr>
      <th>
        <span class="notdot"></span>
      </th>
      <th style="text-align:left">
        <h5>systems</h5>
      </th>
    </tr>
  </table>
  <br>
  <table>
    <tr>
      <th>
        <span class="dot"></span>   
      </th>
      <th style="text-align:left">
        <h5>Decision support systems</h5>
      </th>
    </tr>
  </table>
  <br>
  
  
  


    

  <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
  </div>
</template>

<script>
export default {
  name: 'Cryptoindex',
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>


.red { 
  font-weight: 900;
  padding: 0;
  margin:0;
    /* font-size: 200%; */
    /* color: #D80027; */
}

th{
  /* border:solid 1px; */
}


ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
  }

.listpointitem{
  /* font-weight:600; */
  /* padding-left: 5px; */
  /* text-align:left; */
  /* padding-top:15px; */
  /* padding-bottom:15px; */

} 

.dot {
  height: 20px;
  width: 20px;
  background-color:#008DDD;
  border-radius: 50%;
  display: inline-block;
  margin-top:6px;
  margin-right:10px;
  
}

.notdot{
  height: 20px;
  width: 20px;

  display: inline-block;
  margin-top:5px;
  margin-right:10px;
  

}



h4{
  font-weight: 900;
  margin:0;
  padding:0;
}

h5{
  margin:0;
  padding:0;
}
</style>
