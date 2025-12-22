'use client'
import { updateEntry } from '@/utils/api';
import { useDebounce } from '@/utils/useDebounce';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function TextAreaComponents({ content, id }: { content: any, id: any }) {
	const [textvalue, setTextvalue] = useState(content);
	const debouncedContent = useDebounce(textvalue, 500);
	const router = useRouter();

	useEffect(() => {
		if (debouncedContent) {
			updateEntry(id, debouncedContent).then(() => {
				router.refresh();
			});
		}
	}, [debouncedContent, id, router]);
	return <textarea className={`w-full h-[calc(100vh-30vh)] border border-zinc-800/20 p-12 outline-none`} onChange={(e) => {
		setTextvalue(e.target.value)
	}}
		value={textvalue}>
	</textarea>
}
