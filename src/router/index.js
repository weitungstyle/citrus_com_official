import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/components/Index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue')
      },
      {
        path: 'saved',
        name: 'Saved',
        component: () => import('@/views/Saved.vue')
      },
      {
        path: 'products/:category',
        name: 'Products',
        component: () => import('@/views/products/Products.vue')
      },
      {
        path: 'product/:id',
        name: 'SingleProduct',
        component: () => import('@/views/products/SingleProduct.vue')
      },
      {
        path: 'shopping_bag',
        name: 'ShoppingBag',
        component: () => import('@/views/check_out/ShoppingBag.vue')
      },
      {
        path: 'check_out',
        name: 'CheckOut',
        component: () => import('@/views/check_out/CheckOut.vue')
      },
      {
        path: 'payment/:orderId',
        name: 'Payment',
        component: () => import('@/views/check_out/Payment.vue')
      },
      {
        path: 'payment_success',
        name: 'PaymentSuccess',
        component: () => import('@/views/check_out/PaymentSuccess.vue')
      },
      {
        path: 'sign_in',
        name: 'SignIn',
        component: () => import('@/views/sign_in/SignIn.vue')
      },
      {
        path: 'creat_account01',
        name: 'CreatAccount1',
        component: () => import('@/views/sign_in/CreatAccount1.vue')
      },
      {
        path: 'creat_account02',
        name: 'CreatAccount2',
        component: () => import('@/views/sign_in/CreatAccount2.vue')
      },
      {
        path: 'welcome',
        name: 'Welcome',
        component: () => import('@/views/sign_in/Welcome.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router
