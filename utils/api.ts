const createUrl = (path: string) => {
	return window.location.origin + path;

}
export const createNewEntries = async (content: string) => {
	const res = await fetch(new Request(createUrl("/api/journal"), {
		method: "POST",
		body: content || "This is random header text file " // Fallback while there is no any entry
	}))
	if (res.ok) {
		const data = await res.json()
		return data.data;
	}
}
export const getEntries = async (content_id: string) => {
	const res = await fetch(new Request(createUrl(`/api/journal/${content_id}`), {
		method: "GET"
	}));
	if (res.ok) {
		const data = await res.json() // Parsing the json file ftom the component
		return data;
	}
}
export const updateEntried = async (contentId: string) => {
	const res = await fetch(new Request(createUrl(`/api/journal/${contentId}`), {
		method: "PATCH",
	}))
	if (res.ok) {
		const data = await res.json()
		return data.data;
	}

}
