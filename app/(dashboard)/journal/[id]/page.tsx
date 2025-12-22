import { useDebounce } from '@/utils/useDebounce';
import TextAreaComponents from '@/components/TextAreaComponent';
import ReviewComponennt from '@/components/ReviewComponent';
import { prisma } from '@/utils/db';
import { analyze } from '@/utils/ai';
export default async function JournalWithId(props: PageProps<'/journal/[id]'>) {
	const { id } = await props.params;
	const content = await prisma.posts.findFirst({
		where: {
			id: id
		}
	})
	const output = analyze(content?.content || "");
	return (
		<div className='flex h-full w-full flex-10 '>
			< div className='flex-8 p-3'>
				<TextAreaComponents content={content?.content} id={id} />
			</div>
			<div className='ml-2 h-full border-l border-zinc-300/50 flex-2 px-8 py-10 flex  flex-col items-center bg-zinc-200/20 w-full'>
				<p className='font-bold text-3xl  font-serif bg-green-300  h-10 w-full'>Analysis</p>
				<div>
					{output.then((data) => {
						return <>
							{data}
						</>
					})}
				</div>
			</div>
		</div>
	)
}
