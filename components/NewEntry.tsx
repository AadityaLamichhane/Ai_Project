"use client"
import { createNewEntries } from "@/utils/api"
import { useRouter } from "next/navigation"
const NewEntry = () => {
	const router = useRouter();
	const handleOnClick = async () => {
		const data = await createNewEntries("");
		const value = window.location.href;
		window.location.href = `journal/${data.id}`
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

