import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: {},
		cart: []
	},
	mutations: {
		login(state, user) {
			state.user = user
		},
		logout(state) {
			state.user = {}
			state.cart = []
		},
		setCart(state, cart) {
			state.cart = cart
		}
	},
	actions: {
		loginAction({commit}, user) {
			commit('login', user)
		},
		logoutAction({commit}) {
			commit('logout')
		},
		setCartAction({commit}, cart) {
			commit('setCart', cart)
		}
	}
})