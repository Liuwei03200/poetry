import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Eat from '@/components/Eat'
import Drink from '@/components/Drink'
import Play from '@/components/Play'
import Happy from '@/components/Happy'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Home from '@/components/Home'

import Clothes from '@/components/life/Clothes'
import Food from '@/components/life/Food'
import House from '@/components/life/House'
import Tourism from '@/components/life/Tourism'

Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
		{path:'/',name:'homeLinke',component:Home},
		{path: '/eat',name: 'eatLink',component: Eat},
		{path: '/drink',name: 'drinkLink',component: Drink},
		{path: '/play',name: 'playLink',component: Play},
		{path: '/happy',name: 'happyLink',component: Happy},
		{path: '/register',name: 'registerLink',component: Register},
		{path: '/login',name: 'loginLink',component: Login},
		{path: '/clothes',name: 'clothesLink',component: Clothes},
		{path: '/food',name: 'foodLink',component: Food},
		{path: '/house',name: 'houseLink',component: House},
		{path: '/tourism',name: 'tourismLink',component: Tourism},
		{path:'*',redirct:'/'}
	]
})
