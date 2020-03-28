import http from '@/services/http'

export default {
	login: ({ commit }, payload) => {
		return http.post('user/authenticate', payload).then(user => {
			if (user.token) {
				commit('USER', user)
			}
		})
	},
	readStatus: ({ commit }, payload) => {
		return http.post('readstatus', payload)
	},
	updateChapters: ({ commit, state }, value) => commit('updateChapters', value)
}