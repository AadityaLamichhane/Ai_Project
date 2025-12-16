"use client"
import { createNewEntries } from "@/utils/api"
import { useRouter } from "next/navigation"
const NewEntry = () => {
	const content = "Hello this is the new content to be inserted in the journal this is from the new entry of the journal not the updated entry of this journal"
	const router = useRouter();
	const handleOnClick = async () => {
		const data = await createNewEntries(content as string);
		console.log(data);
		router.push(`/journal/${data.id}`)
	}
	return <>
		<div
			className="cursor-pointer overflow-hidden rounded-lg bg-white shadow"
			onClick={handleOnClick}
		>
			<div className="px-4 py-5 sm:p-6">
				<span className="text-3xlusing ">New Entry</span>
			</div>
		</div>
	</>
}
export default NewEntry;

