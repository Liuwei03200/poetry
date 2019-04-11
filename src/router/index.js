import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Food from '@/components/Food'
import Drink from '@/components/Drink'
import Play from '@/components/Play'
import Happy from '@/components/Happy'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
		{path: '/',name: 'foodLink',component: Food},
		{path: '/drink',name: 'drinkLink',component: Drink},
		{path: '/play',name: 'playLink',component: Play},
		{path: '/happy',name: 'happyLink',component: Happy},
		{path: '/register',name: 'registerLink',component: Register},
		{path: '/login',name: 'loginLink',component: Login},
		{path:'*',redirct:'/'}
		]
})
