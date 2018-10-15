<template>
      <div>
  <b-card class="mb-2">
    <h4>
      BLOCKCHAIN
    </h4>
    <div>
      <b-img src="static/portfolio/blockchain.png" fluid alt="Responsive image" />
    </div>
    <table style="text-align:left">
      <tr>
        <th style="padding-top:7px;vertical-align: top;">
          <div style="width:0.5rem; height:70px; background-color: black;"></div>
        </th>
        <th style="padding-left:10px">
          <h4 style="font-weight:bold;">We create and implement</h4>
          <p style="font-weight:400">distributed and decentralized blockchain solutons of any complexity  for various business areas.</p>
        </th>
        
      </tr>
      
    </table>

    <h4>Our experience & expertise include:</h4>
    <br>

    <table style="width:100%">
    
    <tr class="therow">
      <th class="tableimg">
        <b-img src="static/portfolio/token.png" fluid alt="Responsive image" />
      </th>
      <th class="tabletext">
        <h5>Token & Ecosystem of services</h5>       
      </th>
    </tr>
    <br>
    <tr class="therow">
      <th class="tableimg">
        <b-img src="static/portfolio/smartc.png" fluid alt="Responsive image" />
      </th>
      <th class="tabletext">
        <h5>Smart contract development & Audit</h5>
        
      </th>
    </tr>
    <br>
    <tr class="therow">
      <th class="tableimg">
        <b-img src="static/portfolio/private.png" fluid alt="Responsive image" />
      </th>
      <th class="tabletext">
        <h5>Private & corporate blockchain integration</h5>
      </th>
    </tr>
    <br>
    <tr class="therow">
      <th class="tableimg">
        <b-img src="static/portfolio/architect.png" fluid alt="Responsive image" />
      </th>
      <th class="tabletext">
        <h5>Architectural expertise of blockchain projects</h5>
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
  name: 'Credittoken',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

/* table{margin:auto} */
th{
  /* border:solid 1px; */
}

/* .therow{ */
  /* margin-top:10px; */
  /* margin-bottom:10px; */
  /* padding-top:100px; */

/* } */
.tableimg{
  width: 40%



}
.tabletext{
  text-align: left;
  font-weight: 900;
  width:50%;
  padding:10px;
  /* border:solid 1px; */
  /* padding-left:10px; */
  /* margin-left:10px; */
}

h4{
  font-weight: 900;
  margin:0;
  padding:0;
}

h5{
  font-weight: 900;
  margin:0;
  padding:0;

}

</style>


