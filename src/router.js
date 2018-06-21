import Vue from 'vue'
import Router from 'vue-router'

import Register from './views/Register'
import Login from './views/Login'
import Home from './views/Home'
import Order from './views/Order'
import Add from './views/Add'
import ManageOrder from './views/ManageOrder'
import Cart from './views/Cart'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/register',
			component: Register
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/order',
			component: Order
		},
		{
			path: '/add',
			component: Add
		},
		{
			path: '/order_manage',
			component: ManageOrder
		},
		{
			path: '/cart',
			component: Cart
		}
	]
})