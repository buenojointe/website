import Vue from 'vue'
import Router from 'vue-router'


import HomeComponent from '@/components/HomeComponent'

import AboutComponent from '@/components/AboutComponent'
import ProductsComponent from '@/components/ProductsComponent'
import PortfolioComponent from '@/components/PortfolioComponent'
import ContactsComponent from '@/components/ContactsComponent'

import LandingComponent from '@/layoutcomponents/LandingComponent'


Vue.use(Router)

export default new Router({
  mode: 'history',
  relative: true,
  routes: [
    {path: '/about', component: AboutComponent},
    {path: '/products', component: ProductsComponent},
    {path: '/portfolio', component: PortfolioComponent},
    {path: '/contacts', component: ContactsComponent},
    {path: '/landing', component: LandingComponent},
    {path: '/', component: HomeComponent},
  ]
})
