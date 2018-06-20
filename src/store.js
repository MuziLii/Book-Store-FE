import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: {}
	},
	mutations: {
		login(state, user) {
			state.user = user
		},
		logout(state) {
			console.log(state.user)
			state.user = {}
			console.log(state.user)
		}
	},
	actions: {
		loginAction({commit}, user) {
			commit('login', user)
		},
		logoutAction({commit}) {
			commit('logout')
		}
	}
})