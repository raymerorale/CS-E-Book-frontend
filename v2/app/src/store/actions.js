import http from '@/services/http'

export default {
	login: ({ commit }, payload) => {
		http.post('user/authentication', payload).then(user => {
			if (user.token) {
				commit('USER', user)
			}
		}).catch(error => {
			console.log(error)
		})
	},
	updateChapters: ({ commit, state }, value) => commit('updateChapters', value)
}