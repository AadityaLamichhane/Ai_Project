"use client"
import { X } from "lucide-react"

const DeleteComponent = ({ id }: { id: string }) => {
	const clicked = () => {
		console.log('Clicked');
	}
	return <>

		<div className="absolute opacity-0  scale-[40%] right-0 top-0 group-hover:opacity-100 scale-[60%]" onClick={clicked}>
			<X />
		</div>
		<div className="h-screen  w-screen ">
			Hello This is element

		</div>
	</>
}
export default DeleteComponent;
