import { prisma } from "@/utils/db"

async function ReviewComponennt({ id }: { id: string }) {
	const review = await prisma.review.findFirst({
		where: {
			journalId: id
		}
	})
	return (<div className="border-zinc-300 flex justify-between   w-full mt-3 pt-3">
		< div >
			{review?.summary}
		</div>
	</div>)

}
export default ReviewComponennt;
