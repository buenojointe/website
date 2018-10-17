<template>

<div class="container">
<!-- <div class="container" style="margin-left:auto; margin-right:auto"> -->

<table>
  <tr>
      <th style="padding-top:17px;vertical-align: top;">
          <div style="width:0.5rem; height:80px; background-color: black;"></div>
        </th>
    <th>
          <div class="homeText">
            <h2>Art</h2>
            <h2>of Software</h2>
            <h2>Development</h2>
          </div>
    </th>
  </tr>
</table>
<b-img style="" src="static/splash.png" fluid alt="Responsive image" />        



<b-card style="border-radius: 25px; padding: 0;">
  <table style="">
    <tr>
      <th>
        <b-img src="static/home/checklist.png" fluid alt="Responsive image" >

        </b-img>

      </th>
      <th style="text-align:right">
        <h1 style="font-weight:900; font-size: 400%;">>120</h1>
        <h4 style="font-weight:300; font-size: 150%">succesfully finished projects</h4>

      </th>
    </tr>
  </table>
</b-card>


<b-card style="border-radius: 25px; padding: 0;">
  <table style="">
    <tr>
      <th>
        <b-img src="static/home/pc.png" fluid alt="Responsive image" >

        </b-img>

      </th>
      <th style="text-align:right">
        <h1 style="font-weight:900; font-size: 400%;">15+</h1>
        <h4 style="font-weight:300; font-size: 150%">years of software development</h4>

      </th>
    </tr>
  </table>
</b-card>

<table style="width: 100%">
  <tr>
    <th>
      <b-card style="border-radius: 25px; padding: 0;height: 150px">
        <h1 style="font-weight:900; font-size: 400%; padding:0; margin:0; position: relative">10+
          <h4 style="font-weight:300; padding:0; margin:0; position: absolute; top: 80%">active projects</h4>
        </h1>
        
      </b-card>
    </th>
    <th>
      <b-card style="border-radius: 25px; padding: 0; text-align:center;height: 150px">
        <h1 style="font-weight:900; padding:0; margin:0; font-size: 400%; position: relative">20+
          <h4 style="font-weight:300; padding-left:15px; margin:0; position: absolute; top: 90%">partners</h4>
        </h1>
        
      </b-card>
    </th>
  </tr>
</table>

<b-card style="border-radius: 25px;">

  <table style="width:100%">
    <tr>
      <th style="width:25%;"> 
        <b-img style="" src="static/home/globe.png" fluid alt="Responsive image" ></b-img>

      </th>
      <th style="width:75%; text-align:left">
        <h5 style="margin:0;padding:0;font-weight:700;">Moscow</h5>
        <h5 style="margin:0 0 0 27%;padding:0;font-weight:700; margin-left:30%">London</h5>
        <h5 style="margin:0 0 0 55%;padding:0;font-weight:700;">Belgrade</h5>
      </th>
    </tr>
      
  </table>
      <h1 style="font-weight:700;">3</h1>
      
      <h2 style="font-weight:300;">worldwide offices</h2>



</b-card>

<div class="mainButton">Contact Us</div>



</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>

.card{
  margin-top:4px;
  margin-bottom:4px;

}
th{
  /* border: solid 1px; */
}

.homeText{
  text-align: left;
  font-size:150%;
  margin: 5%;
}

.homeText h2{
  font-weight: 700;
}

.container{
  /* height: 100vh; */
}

.mainButton{
  padding: 10px;
  width: 232px;
  /* height: 54px; */
  left: 71px;
  top: 571px;
  background: #F2C94C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
  font-size:24px;
  font-family: Work Sans;
  font-style: semibold;
  font-weight: 600;
  line-height: normal;
  margin-left:auto;
  margin-right:auto;
  margin-top:20px;
  margin-bottom:50px;
  cursor: pointer;
}

.mainButton:hover{
  background: #A2C94C;

}

.mobileHomeText{
  font-family: Work Sans;
  font-style: semibold;
  font-weight: 600;
  line-height: normal;
  font-size: 36px;
  padding-left: 14px;
  text-align:left;
}

.desktopHomeText{
  font-family: Work Sans;
  font-style: semibold;
  font-weight: 600;
  line-height: normal;
  font-size: 64px;
  padding-left: 14px;
  text-align:left;
  color:black;
}

</style>
