import http from '@/services/http'

export default {
	login: ({ commit }, payload) => {
		return http.post('user/authenticate', payload).then(user => {
			if (user.token) {
				commit('USER', user)
			}
		})
	},
	setReadStatus: ({ commit }, user_id) => {
		return http.get(`readstatus/user/${ user_id }`).then(read_status => {
			if (read_status) {
				commit('SET_READ_STATUS', read_status)	
			}
		})
	},
	createReadStatus: ({ commit }, payload) => {
		return http.post(`readstatus/user/${ payload.userId }`, payload).then(read_status => {
			if (read_status) {
				commit('CREATE_READ_STATUS', read_status)
			}
		})
	},
	updateReadStatus: ({ commit }, { userId, chapterId, status }) => {
		return http.put(`readstatus/user/${ userId }/chapter/${ chapterId }`, status).then(read_status => {
			if (read_status) {
				commit('UPDATE_READ_STATUS', read_status)
			}
		})
	},
	updateChapters: ({ commit, state }, value) => commit('updateChapters', value)
}