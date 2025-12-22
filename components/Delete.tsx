"use client"
import { X } from "lucide-react"
const DeleteComponent = ({ id }: { id: string }) => {
	const clicked = () => {
		const deleteComponent = "Call the delete component method from the frontend"
	}
	return <>
		<div className="absolute opacity-0  scale-[40%] right-0 top-0 group-hover:opacity-100 transition-all-3s scale-[60%]" onClick={clicked}>
			<X />
		</div>
	</>
}
export default DeleteComponent;
