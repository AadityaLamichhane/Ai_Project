import NewEntry from "@/components/NewEntry";
import DeleteComponent from "@/components/Delete"
import { X } from 'lucide-react';
import { getUserByclerkId } from "@/utils/auth"
import { prisma } from "@/utils/db";
import Link from "next/link";
const entries = async () => {
	const user = await getUserByclerkId();
	const entries = await prisma.posts.findMany({
		where: {
			userId: user.id
		}
	});
	console.log('Get the entries + journal revieq');
	return entries || [];

}
const JournalPage = async () => {
	const entryArray = await entries()
	return (<>
		{/* Add the padding and make the title  */}
		<div className="p-10 bg-zinc-300/20 h-full w-full">
			<h2>Journal</h2>
			<div className="grid grid-cols-3 gap-4">
				<NewEntry>
				</NewEntry>
				{entryArray.map((element) => {
					return <Link key={element.id} href={`journal/${element.id}`} className="  p-4 border border-zinc-400/45 bg-zinc-100 rounded-sm shadow-amber-100 cursor-pointer relative group">
						<div key={element.id} className="flex">
							{element.content}
							<DeleteComponent id={element.id} />
						</div>
					</Link>
				})}
			</div>
		</div >
	</>)
}
export default JournalPage
