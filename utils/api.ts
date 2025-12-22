const createUrl = (path: string) => {
	return window.location.origin + path;
}
export const deleteEntries = async (id: string) => {
}
export const createNewEntries = async (content: string) => {
	const res = await fetch(new Request(createUrl("/api/journal"), {
		method: "POST",
		body: JSON.stringify({ content }) // Fallback while there is no any entry
	}))
	if (res.ok) {
		const data = await res.json();
		console.log("Data inserted in the body is ", data.data);
		return data.data;
	}
}
export const getEntries = async (content_id: string) => {
	const res = await fetch(new Request(createUrl(`/api/journal/${content_id}`), {
		method: "GET"
	}));
	if (res.ok) {
		const data = await res.json() // Parsing the json file ftom the component
		return data.data;
	}
}
export const updateEntry = async (contentId: string, content: string) => {
	console.log('Updatinhe data ');
	const res = await fetch(new Request(createUrl(`/api/journal/${contentId}`), {
		method: "PATCH",
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({ content })
	}))
	if (res.ok) {
		const data = await res.json()
		return data.data;
	}

}
