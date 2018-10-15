<template>
  <div>
  <b-card class="mb-2">
    <h4 class="red">NATURAL</h4>
    <h4 class="red">LANGUAGE</h4>
    <h4 class="red">PROCESSING</h4>
  <br>
  <table style="text-align:left">
      <tr>
        <th style="padding-top:7px;vertical-align: top;">
          <div style="width:0.5rem; height:70px; background-color: black;"></div>
        </th>
        <th style="padding-left:10px">
          <h4 style="font-weight:bold;">We create and implement</h4>
          <p style="font-weight:400">various algorithms of computational linguistics and natural language processing in business processes</p>
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
      <th style="">
        <h5>Facts extraction from text</h5>
      </th>
    </tr>
  </table>
  <br>
  <table>
    <tr>
      <th>
        <span class="dot"></span>
      </th>
      <th style="">
        <h5>Texts classification</h5>
      </th>
    </tr>
  </table>
  <br>
  <table>
    <tr>
      <th>
        <span class="dot"></span>
      </th>
      <th style="">
        <h5>Text tonality analysis</h5>
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
        <h5>Semantic And</h5>
      </th>
    </tr>
    <tr>
      <th>
        <span class="notdot"></span>
      </th>
      <th>
        <h5>multilanguage search</h5>
      </th>
    </tr>
  </table>
  <br>
  
  
  


    

  <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
  <!-- <br> -->
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


.red::first-letter { 
    /* font-size: 200%; */
    color: #D80027;
}

th{
  /* border:solid 1px; */
}


ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
  }


.dot {
  height: 20px;
  width: 20px;
  background-color: #D80027;
  border-radius: 50%;
  display: inline-block;
  margin-top:5px;
  margin-right:10px;
  
}

.notdot{
  height: 20px;
  width: 20px;

  display: inline-block;
  margin-top:6px;
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
