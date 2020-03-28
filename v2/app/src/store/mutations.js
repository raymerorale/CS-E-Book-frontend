export default {
	USER: (state, user) => {
		state.user = user
		localStorage.setItem('user', JSON.stringify(user))
	},
	SET_READ_STATUS: (state, read_status) => state.read_status = read_status,
	CREATE_READ_STATUS: (state, read_status) => state.read_status.push(read_status),
	UPDATE_READ_STATUS: (state, read_status) => {
		let item = state.read_status.find(item => item.id == read_status.id)
		if (item) {
			item.status = read_status.status
		}
	},
	updateChapters: (state, value) => state.chapters = value,
}	