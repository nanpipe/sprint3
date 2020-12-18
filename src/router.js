import vueRouter from 'vue-router'
import User from './components/User'
import UserBalance from './components/UserBalance'
import UserWaiting  from './components/UserWaiting'
import UserCreate  from './components/UserCreate'
import App from './App'
const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/user/:username',
      name: "user",
      component: User
    },
    {
      path: '/user/',
      name: "UserWaiting",
      component: UserWaiting
    },
    {
      path: '/user/balance/:username',
      name: "user_balance",
      component: UserBalance
    },
    {
      path: '/create/',
      name: "UserCreate",
      component: UserCreate
    },
    
  ]
})
export default router
