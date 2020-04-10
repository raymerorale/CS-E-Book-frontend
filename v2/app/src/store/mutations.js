const findChapterById = (data, id) => {
	for(var i = 0; i < data.length; i++) {
			if (data[i].chapterId == id) {
					return data[i];
			} else if (data[i].sub && data[i].sub.length) {
					findChapterById(data[i].sub, id);
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
			let chapter = findChapterById(state.chapters, id)
			if (chapter) {
				chapter.read_status = 'Done'
			}
		})
		console.log(state.chapters)
	},
	SET_READ_STATUS: (state, read_status) => state.read_status = read_status,
	updateChapters: (state, value) => state.chapters = value,
}	