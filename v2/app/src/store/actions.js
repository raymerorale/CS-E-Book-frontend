import http from '@/services/http'

export default {
	login: ({ commit }, payload) => {
		return http.post('user/authenticate', payload).then(user => {
			if (user.data && user.data.token) {
				commit('USER', user.data)
			}
		})
	},
	setUserChapterIdsEnabled: ({ commit }, user_id) => {
		return http.get(`userchapter/user/${ user_id }`).then(response => {
			if (response && response.data && response.data.userChapterIdsEnabled) {
				console.log('user chapters enabled ', response)
				commit('SET_USER_CHAPTERS_ENABLED', response.data.userChapterIdsEnabled)
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