'use client'
import { getEntries, updateEntried } from '@/utils/api';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
export default function JornalWithId() {
	const [content, setContent] = useState('');
	const params = useParams()
	const id = params.id ?? ""
	useEffect(() => {
		console.log('Gettig the id as the string');
		getEntries(id as string).then((content_FromBackend) => {
			setContent(content_FromBackend.data.content);
		})
	}, [])
	const onclickFunction = async () => {
		await updateEntried(id as string);

	}

	return <>
		{/* Rich text editor platorm for the application */}
		<textarea className={`w-full h-[calc(100vh-30vh)] border border-zinc-800/20 p-12`} onChange={(e) => {
			setContent(e.target.value);

		}}
			value={content}>
		</textarea>
		<button onClick={onclickFunction}>submit</button>
	</>

}
