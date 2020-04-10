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
				console.log('user chapters enabled ', response.data.userChapterIdsEnabled)
				commit('SET_USER_CHAPTERS_ENABLED', response.data.userChapterIdsEnabled)
			}
		})
	},
	updateChapters: ({ commit, state }, value) => commit('updateChapters', value),
	saveProgress: ({ commit }, payload) => {
		return http.post(`userchapter`, payload)
	}
}