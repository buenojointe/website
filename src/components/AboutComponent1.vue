<template>
  <div>
    <div class="TextBox" style="position:absolute; z-index:1;">
    <table>
    <tr>
      <th style="vertical-align:top">
        <div class="square"> 
      </div></th>
      <th>
        <div style="text-align:left;">
        <div class="HomeText">Art</div>
        <div class="HomeText">of Software</div>
        <div class="HomeText">Development</div>
        </div>
      </th>
    </tr>
    </table>
    </div>

    <div class="Img" style="position: relative;">
      <b-img src="/static/splash.png" fluid alt="Responsive image" />
    </div>      
  
    <div class="mainButton">
      <div style="padding-top:10px">
        Contact Us
      </div>
    </div>

  </div>

</template>

<script>

export default {
  name: 'About',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>



.mainButton{
  width: 232px;
  height: 54px;
  /* left:40%; */
  top: 471px;
  background: #F2C94C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
  font-size:24px;
  font-family: Work Sans;
  font-style: semibold;
  font-weight: 600;
  line-height: normal;
  /* position: absolute; */
  margin-left:auto;
  margin-right:auto;
  margin-top:20px;
}

.square {
  width: 10px;
  height: 140px;
  background: black;
  border: solid 1px;
  }

.HomeText{
  font-family: Work Sans;
  font-style: semibold;
  font-weight: 600;
  line-height: normal;
  text-align: left;
  font-size: 64px;
  padding-left: 6px;
  color:black;
}

.TextBox{
  /* position: absolute; */
  margin-top: 10%;
  margin-left: 25%;
  }

img{
    width:80%;
    margin-left: 80%;
  }

@media only screen and (max-width: 768px) {
  
  .mainButton{
    /* position: relative; */
    left:20%;
    /* top: 471px; */
  }

  .HomeText {
    font-size:36px;
    padding-left: 6px;
  }

  .TextBox{
    /* position: relative; */
    margin-top: 15%;
    margin-left: 5%;
  }

  img{
    margin-top:20%;
    margin-left: 0%;
    width:80%;
  }

  .square{
    width: 6px;
    height: 80px;
  }
}
</style>
