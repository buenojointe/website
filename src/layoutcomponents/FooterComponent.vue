<template>
  <div style="margin-top: 10%; height:150px; background-color:gray; border: solid 1px;">
    <!-- Footer Component1 -->
    <table style="width:100%">
      <tr>
        <th style="width:50%">
          <div class="foottext">Contacts</div>
        </th style="width:50%"><th>
          <div class="foottext">Locations</div>
        </th>
      </tr>
      <tr>
        <th>
          <div class="foottext">Phone</div>
        </th>
        <th>
          <div class="foottext">Moscow</div>
        </th>
      </tr>
      <tr>
        <th>
          <div class="foottext">Telegram </div>
        </th>
        <th>
          <div class="foottext">Belgrade</div>
        </th>
      </tr>
      <tr>
        <th>
          <div class="foottext">Email </div>
        </th>
        <th>
          <div class="foottext">Navajo</div>
        </th>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.foottext{
  text-align:left;
  margin-left:10%;
  

}


</style>
