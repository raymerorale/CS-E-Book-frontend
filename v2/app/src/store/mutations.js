const findChapterById = (state, id) => {
	for(var i = 0; i < state.chapters.length; i++) {
			if (state.chapters[i].chapterId == id) {
					return state.chapters[i];
			} else if (state.chapters[i].sub && state.chapters[i].sub.length) {
					findChapterById(state.chapters[i].sub, id);
			}
	}
}

export default {
	USER: (state, user) => {
		state.user = user
		localStorage.setItem('user', JSON.stringify(user))
	},
	SET_USER_CHAPTERS_ENABLED: (state, chapter_ids) => {
		chapter_ids.map(id =>{
			let chapter = findChapterById(state, id)
			if (chapter) {
				chapter.read_status = 'Done'
			}
		})
	},
	SET_READ_STATUS: (state, read_status) => state.read_status = read_status,
	updateChapters: (state, value) => state.chapters = value,
}	