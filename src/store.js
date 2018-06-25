import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: {},
		cart: []
	},
	mutations: {
		setUser(state, user) {
			state.user = user
		},
		logout(state) {
			state.user = {}
			state.cart = []
			sessionStorage.removeItem('$token')
		},
		setCart(state, cart) {
			state.cart = cart
		}
	},
	actions: {
		loginAction({commit}, user) {
			commit('setUser', user)
		},
		logoutAction({commit}) {
			commit('logout')
		},
		setCartAction({commit}, cart) {
			commit('setCart', cart)
		},
		setUserAction({commit}, user) {
			commit('setUser', user)
		}
	}
})