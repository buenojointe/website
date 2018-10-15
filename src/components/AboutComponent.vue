

<template>


<b-container fluid class="bv-example-row">

    <!-- <div v-component="my-component"></div> -->

    <b-row>
        <b-col>
          <h6 style="text-align:left; color:grey;font-family: Work Sans;font-style: semibold;">
          0.1 ABOUT US
          </h6>
        </b-col>
    </b-row>

    <b-row style="margin-top:1em">
      <b-col sm="4" style="padding-left:4%">
        <table>
          <tr>
            <th style="background-color:black">
            <div class="square"></div>
            </th>
            <th>
             <h1 style="word-wrap: normal">A Quick Brief</h1>
            </th>
          </tr>
          <tr><th>
          </th>
          <th>
            <div style="text-align:left; margin-left:5%; margin-top:5%">
            <h5 style="font-weight:900;">Foundation year:</h5>
            
            <h5>2018</h5>
            <h5 style="font-weight:900">Founders:</h5>
            <h5>Sergey Shashev</h5>
            <h5>Oleg Volkosh</h5>
            <h5>Andrey Kokorin</h5>

            <h5 style="font-weight:900">Team:</h5>
            <h5>23 members (We’re hiring now!)</h5>
        
            </div>
            </th></tr>
        </table>
      </b-col>
      <b-col sm="8">
        <div style="text-align:left; margin-top:1em">Dexpa was founded in 2018 (the founders: the people from the Naumen company + diversified communications holding, MediaPlus).
        </div>
        <!-- <b-row style="text-align:center"> -->
        <!-- <b-col><b-img src="/static/flower.jpeg" fluid alt="Responsive image" /></b-col> -->
        <!-- <b-col><div style="width:200px; height:200px; border: solid 1px"></div></b-col> -->
        <!-- <b-col><div style="width:200px; height:200px; border: solid 1px"></div></b-col> -->
        <!-- </b-row> -->
        
        <table style="margin-top:5%; width:100%;">
          <tr>
            <th style="width:33%">
              
              <b-img style="width:75%" rounded="circle" src="/static/shashev.jpeg" fluid alt="Responsive image" />

              <h6 style="font-weight:900; margin-top:1em">Shashev Sergei</h6>
              <h5>CEO, founder</h5>
              <h6><a href='/'>LinkedIn </a>| <a href='/' >Facebook</a></h6>
            </th>
            <!-- <th style="width:5%"></th> -->
            <th  style="width:33%">
              
              <b-img style="width:75%" rounded="circle" src="/static/kamentsev.jpeg" fluid alt="Responsive image" />
              
              <h6 style="font-weight:900; margin-top:1em">Kamentsev Stepan</h6>
              <h5>CEO, founder</h5>
              <h6><a href='/'>LinkedIn </a>| <a href='/' >Facebook</a></h6>
            </th>
            <!-- <th style="width:5%"></th> -->
            <th  style="width:33%">
              <b-img style="width:75%" rounded="circle" src="/static/hramcov.jpeg" fluid alt="Responsive image" />
                <h6 style="font-weight:900; margin-top:1em">Hramcov Aleksandr</h6>
                <h5>CEO, founder</h5>
                <h6><a href='/'>LinkedIn </a>| <a href='/' >Facebook</a></h6>
            </th>
            </tr>
        </table>
      </b-col>
  </b-row>

<b-row style="margin-top:1em">
<b-col sm="4"  style="padding-left:4%">
        <table>
          <tr>
            <th style="background-color:black">
            <div class="square"></div>
            </th>
            <th>
             <h1>Job Openings</h1>
            </th>
          </tr>
          <tr>
            <th>
            </th>
            <th>
            <div style="text-align:left; margin-left:5%;margin-top:5%">
            <h6>- Frontend Developer</h6>
            <h6>- Fullstack Developer</h6>
            <h6>- Data scientist</h6>
            <h6>- Frontend Developer</h6>
            <h6>- Scala engineer</h6>
        
            </div>

            </th>
          </tr>
        </table>


      </b-col>
      <b-col sm="8" style="text-align:left; margin-top:1em;">We always look forward to collaborate with the most professionals of the IT-business. Feel free to submit an application and stay in touch!
        <table style="width:60%; margin-top:1em">
        <tr>

        <th style="text-align:center; ">
          <a href="/"><h4><div class="submitButton">Submit Your CV</div></h4></a>
          
        </th>  <th>
          <div style="text-align:center;">
          <a href='/'><img src="static/tglink.png"></a>

          </div>
        
        </th>
        
        
        </tr>
        </table>
        <!-- <table style="margin-left:auto;margin-right:auto"> -->
          <!-- <tr><th>Photo1</th> -->
            <!-- <th>Photo2</th> -->
            <!-- <th>Photo3</th> -->
            <!-- </tr> -->
        <!-- </table> -->
      </b-col>
</b-row>


</b-container>



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

.submitButton{
  margin-left:auto;
  margin-right:auto;
  width: 235px;
  height: 60px;
  text-align:center;
  padding-top:15px;
  font-family: Work Sans;
  font-style: semibold;
  color:black;

  background: #F2C94C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
}
.submitButton:hover{
  background:aqua;
}

th{
  /* border: solid 1px; */
  vertical-align:top;
}
.notbreadcrumb{
  font-family: Work Sans;
  font-style: semibold;
  line-height: normal;
  margin-left: 14px;
  text-align:left;
  background-color: white;
  

}

.square {
  width: 10px;
  height: 3em;
  background: black;
  border: solid 1px;
  }

h1{
  font-family: Work Sans;
  font-style: semibold;
  line-height: normal;
  padding-left: 14px;
  text-align:left;
}
/* @media only screen and (max-width: 768px) { */
  

</style>
