<template>
  <b-container fluid class="bv-example-row">
    <b-row>
        <b-col >
          <h6 style="text-align:left; color:grey;">
          0.2 PRODUCTS
          </h6>
        </b-col>
    </b-row>
    
    <b-row>
        <b-col sm="6">
          <div class="container">
            <b-img style="border-radius:20px;" src="/static/products/red.jpg" fluid alt="Responsive image" />
            <div class="redtext1">AN EFFECTIVE WAY</div>
            <div class="redtext2">To attract your audience</div>
            
            <div class='lebutton'>
              Learn more
            </div>
          </div>
        </b-col>
        <b-col sm="6">
          <div class="container">
            <b-img style="border-radius:20px;" src="/static/products/blue.jpg" fluid alt="Responsive image" />
            
            <div class="bluetext1">DATA SERVICES</div>
            <div class="bluetext2">FOR YOUR BUSINESS</div>
            
            <div class='lebutton'>
              Learn more
            </div>
          </div>  
        </b-col>
    </b-row>
    
    <b-row>
        <b-col sm="6">
          <div class="container" style="position:relative">
            <b-img style="border-radius:20px;" src="/static/products/third.jpg" fluid alt="Responsive image" />
          

          <div class="thirdtext1">
            <div>BLOCKCHAIN</div>
            <div>SECURITY</div>
            <div>TRADING</div>
          </div>

          <div class='lebutton'>
              Learn more
          </div>
          </div>
        </b-col>

        <b-col sm="6">
        <div class="container" style="position:relative;">
            <b-img style="border-radius:20px;" src="/static/products/last.jpg" fluid alt="Responsive image" />
        </div>
          <div class="lasttext1">
            MEET OUR TECH STACK
          </div>
          <div class='lebutton'>
              Learn more
          </div>
        </b-col>
    </b-row>
  </b-container>
</template>



<script>
export default {
  name: 'Products',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
  position:relative;
  margin:2% 2% 2% 0;

}
.redtext1{
  position: absolute;
  width:100%;
  top: 35%;
  left: 50%;
  font-size:24px;
  transform: translate(-50%, -50%);
  color:white;
  transition: all 500ms ease;
}

.redtext2{
  position: absolute;
  width:100%;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:white;
}

.bluetext1{
  position: absolute;
  top: 25%;
  left: 8%;
  font-size:24px;
  color:white;
  text-align:left;
}

.bluetext2{
  position: absolute;
  top: 35%;
  left: 8%;
  font-size:24px;
  color:white;
  text-align:left;
}


.thirdtext1{
  position: absolute;
  top: 10%;
  left: 54%;
  font-size:18px;
  text-align:left;
}

.lasttext1{
  position: absolute;
  width:100%;
  top: 40%;
  left: 50%;
  font-size:21px;
  /* text-align:left; */
  color:white;
  transform: translate(-50%, -50%);
}
.lebutton{
  position: absolute;
  top: 80%;
  width: 180px;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 35px;
  background: #F2C94C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 33px;
  padding-top:4px;
  transition: all 500ms ease;
}
.lebutton:hover { 
    font-size: 26px;
    width: 220px;
    height:40px;
}


</style>
