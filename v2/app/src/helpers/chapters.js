export function findChapterById(data, id) {
	for(var i = 0; i < data.length; i++) {
			if (data[i].chapterId === id) {
					return data[i];
			} else if (data[i].sub && data[i].sub.length && typeof data[i].sub === "object") {
					findChapterById(data[i].sub, id);
			}
	}
}
