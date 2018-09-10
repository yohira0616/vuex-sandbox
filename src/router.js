import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import ProductList from '@/views/ProductList.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/product', component: ProductList},
    {path: '/product/:id', component: Product, props: route => ({id: Number(route.params.id)})}
  ]
})

