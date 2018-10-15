<template>

<div class="container">
<!-- <div class="container" style="margin-left:auto; margin-right:auto"> -->

<div v-if="$resize && $mq.above(768)">
  <!-- Desktop -->
  <table style="position:absolute; z-index:1; margin-left:20%; margin-top:7%">
    <tr>
      <th style="vertical-align: top">
        <div style="padding-top: 5px"> 
        <svg width="10" height="135">
        <rect width="300" height="135" style="fill:black" />
        </svg>
       </div>     
      </th>
      <th>
        <div>
        <div class="desktopHomeText">Art</div>
        <div class="desktopHomeText">of Software</div>
        <div class="desktopHomeText">Development</div>
        </div>
      </th>
    </tr>
  </table>

  <div style="position:relative; width:450px; margin-left:40%">
  <b-img src="/static/splash.png" fluid alt="Responsive image" />
  </div>

  <div class="mainButton">
    <div style="padding-top: 10px;">
      Contact Us
    </div>
  </div>
</div>
<!-- // ELSE  -->
<div v-else style="margin-top:10px;">
  <table style="position:absolute; z-index:1;">
    <tr>
      <th style="vertical-align: top">
        <div style="padding-top:5px"> 
        <svg width="10" height="77">
        <rect width="300" height="100" style="fill:black" />
        </svg>
       </div>     
      </th>
      <th>
        <div style="text-align:left">
        <div class="mobileHomeText">Art</div>
        <div class="mobileHomeText">of Software</div>
        <div class="mobileHomeText">Development</div>
        </div>
      </th>
    </tr>
  </table>

  <div style="position:relative; padding-top: 70px">
  <b-img src="/static/splash.png" fluid alt="Responsive image" />
  </div>

  <div class="mainButton">
    <div style="padding-top: 10px">
      Contact Us
    </div>
  </div>
</div>
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

.mainButton{
  width: 232px;
  height: 54px;
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
