"use client"
import router from "next/router" 
const NewEntry = ()=>{
      const handleOnClick =  () => {
        const { data } = {data:"hello"}
    router.push(`/journal `)
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
export default  NewEntry;

