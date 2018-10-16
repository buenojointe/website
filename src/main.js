// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import {MediaQueries} from 'vue-media-queries';

import router from './router';

// import VueResponsiveImage from 'vue-responsive-image';
import BootstrapVue from 'bootstrap-vue';



const mediaQueries = new MediaQueries();




// require styles




Vue.use(mediaQueries);
Vue.use(BootstrapVue);

Vue.config.productionTip = false


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  el: '#app',
  // render: h => h(Carousel),
  router,
  components: { App },
  template: '<App/>',
  mediaQueries: mediaQueries,

})
