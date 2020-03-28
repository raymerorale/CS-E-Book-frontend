export default {
	USER: (state, user) => {
		state.user = user
		localStorage.setItem('user', JSON.stringify(user))
	},
	updateChapters: (state, value) => state.chapters = value,
}	