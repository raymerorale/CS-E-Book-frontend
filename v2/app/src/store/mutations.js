const enableChapterId = (data, id) => {
	for(var i = 0; i < data.length; i++) {
		if (data[i].chapterId == id) {
				data[i].read_status = 'Done'
				return data[i]
		} else if (data[i].sub && data[i].sub.length) {
			enableChapterId(data[i].sub, id)
		}
	}
}

export default {
	USER: (state, user) => {
		state.user = user
		localStorage.setItem('user', JSON.stringify(user))
	},
	SET_USER_CHAPTERS_ENABLED: (state, chapter_ids) => {
		chapter_ids.map(id => {
			enableChapterId(state.chapters, id)
		})
	},
	SET_READ_STATUS: (state, read_status) => state.read_status = read_status,
	updateChapters: (state, value) => state.chapters = value,
}	