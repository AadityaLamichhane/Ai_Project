'use client'
import { getEntries, updateEntry } from '@/utils/api';
import { useParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react';
export default function JournalWithId() {
	const [content, setContent] = useState('');
	const params = useParams()
	const id = params.id ?? ""
	const handleSubmit = useCallback((content: any) => {
		updateEntry(id as string, content);
	}, [content]);
	const useDebounce =
		useEffect(() => {

			getEntries(id as string).then((content_FromBackend) => {
				console.log(content_FromBackend);
				setContent(content_FromBackend.content);
			})
		}, [])
	const onclickFunction = async () => {
		await updateEntry(id as string, content);
	}
	return <>
		{/* Rich text editor platorm for the application */}
		<textarea className={`w-full h-[calc(100vh-30vh)] border border-zinc-800/20 p-12`} onChange={(e) => {
			const debounce = useDebounce();
			//Have the debounce for this 
			handleSubmit(content);
		}}
			value={content}>
		</textarea>
		<button onClick={onclickFunction}>submit</button>
	</>

}
const useDebounce = (value: string, delay: number) => {
	const [debounceValue, setDebounce] = useState<string>(value)
	const handler = setTimeout(() => {
		setDebounce(value);
	}, delay);
	return () => {
		clearTimeout(handler);
	}
	return debounceValue;

}
