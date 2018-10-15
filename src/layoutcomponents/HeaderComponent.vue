<template>
    
    <b-navbar style="" toggleable type="light" variant='light' sticky="true">
        
        <b-navbar-brand>
          <a href="/"><b-img src="static/logo.png" width="120" fluid alt="Responsive image" /></a>
        </b-navbar-brand>

        <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
        
        <b-collapse is-nav id="nav_text_collapse">
            <b-navbar-nav>
                <b-nav-text><router-link to="/about">ABOUT US</router-link></b-nav-text>
            </b-navbar-nav>
            <b-navbar-nav>
                <b-nav-text><router-link to="/products">PRODUCTS</router-link></b-nav-text>
            </b-navbar-nav>
            <b-navbar-nav>
                <b-nav-text><router-link to="/portfolio">PORTFOLIO</router-link></b-nav-text>
            </b-navbar-nav>
            <b-navbar-nav>
                <b-nav-text><router-link to="/contacts">CONTACTS</router-link></b-nav-text>
            </b-navbar-nav>
        </b-collapse>

    </b-navbar>
    


</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar-nav{
            font-weight: 600;
            /* line-height: normal; */
            font-size: 32px;
            text-align: right;
            margin-left: auto;
            margin-right: auto;
            white-space: nowrap}



</style>
