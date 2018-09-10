import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import ProductList from '@/views/ProductList.vue'
import ProductHome from '@/views/Product/Home.vue'
import ProductReview from '@/views/Product/Review.vue'
import ProductReviewDetail from '@/views/Product/ReviewDetail.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/product', component: ProductList},
    {
      path: '/product/:id', component: Product, props: route => ({id: Number(route.params.id)}),
      children: [
        {
          name: 'product-home',
          path: '',
          component: ProductHome

        },
        {
          name: 'product-review',
          path: 'review',
          component: ProductReview
        },
        {
          name: 'review-detail',
          path: 'review/:rid',
          component: ProductReviewDetail
        }
      ]

    }
  ]
})

