import NewEntry from "@/components/NewEntry";
import ReviewComponont from "@/components/ReviewComponent"
import MoodRatingComponent from "@/components/MoodRating"
import DeleteComponent from "@/components/Delete"
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
	return entries || [];
}
const JournalPage = async () => {
	const entryArray = await entries();
	return (<>
		<div className="p-10 bg-zinc-300/20  h-full  w-full overflow-y-scroll scroll-smooth">
			<h2>Journal</h2>
			<div className="grid grid-cols-3 gap-4 p-2  ">
				<NewEntry>
				</NewEntry>
				{entryArray.map((element) => {
					return <Link key={element.id} href={`journal/${element.id}`} className="  p-4 border border-zinc-400/45 bg-zinc-100 rounded-sm shadow-amber-100 cursor-pointer relative group ">
						<div key={element.id} className="min-h-25  border-solid ">
							{element.content.length > 100 ? ` ${element.content.slice(0, 100)}...` : `element.content`}
							<DeleteComponent id={element.id} /> {// Delete component fron the client component to server component
							}
							<ReviewComponont id={element.id} />
							<MoodRatingComponent content={element.id as any} />
						</div>
					</Link>
				})}
			</div>
		</div >
	</>)
}
export default JournalPage
