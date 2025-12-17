import NewEntry from "@/components/NewEntry";
import { getUserByclerkId } from "@/utils/auth"
import { prisma } from "@/utils/db";
const entries = async () => {
	const user = await getUserByclerkId();
	const entries = await prisma.posts.findMany({
		where: {
			userId: user.id
		}
	})
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
					return <div key={element.id}>
						{element.content} This is the number of the post
					</div>
				})}

			</div>
		</div>
	</>)
}
export default JournalPage
