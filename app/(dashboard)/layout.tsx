import { UserButton } from "@clerk/nextjs"
import { User } from "@clerk/nextjs/server"
import { ReactNode } from "react"

const Dashboard = ({children}:{children:ReactNode})=>{
    return <>
    <div className="w-screen h-screen relative">
        <aside className="absolute left-0 top-0 w-[200px] h-full border-r border-black-800/10 p-4 ">
        Sidebar
        </aside>
        <div className="ml-[200px] h-full">
            <nav className=" border-b border-black/55 p-3 py-5 h-[60px]">
                <div className="h-full w-full flex justify-end items-center">
                    <UserButton></UserButton>
                </div>
            </nav>
            <div className="p-3 h-[calc(100vh-60px)]">
               {children} 
            </div>
            
        </div>
    </div>
    </>
}
export default Dashboard