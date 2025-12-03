import Image from "next/image";
import Link from "next/link";
export default function Home() {

	return (
		<div className="w-screen h-screen bg-black  flex justify-center items-center text-white">
			<div className="flex justify-center items-center ">
				<div className="flex flex-col justify-center items-center p-3">
					<div >
						<div className="text-5xl font-bold">
							AI Journal Application
						</div>
						<div className="flex p-4 gap-2 items-center justify-center text-xl">
							<div className="">
								Know the moood 
							</div>
							<div>
								Know your letter 
							</div>
						</div>
					</div>
					{/* Add the animation to this and the gradient effect in this repo  */}
					<Link href="/journal" className="justify-center items-center w-full">
						<button className=" bg-blue-600 p-4 rounded-2xl  text-center fonbun 0 self-center w-full ">
							Get Started
						</button>
					</Link>
				</div>
			</div>

		</div>

	)
}
