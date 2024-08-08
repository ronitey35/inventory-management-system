"use client"
import {Bell, Menu, Settings, Sun, User, User2} from "lucide-react"
import Link from "next/link"



const Navbar = () => {


  return (
    <div className= ' flex justify-between py-2  items-center border-b    '>
      {/* leftside */}
      <div className=' flex justify-start gap-4 items-center'>
           
          <button onClick={()=>{}} className=' md:hidden rounded-full p-2 bg-gray-100 hover:bg-blue-100'>
             <Menu className='h-5 w-5' />
            </button>
       
             <div className="relative p-2">
             <input type='search' className=" pl-10 pr-4 w-64
               border-2 focus:outline-none focus:border-blue-500 py-2 rounded-md "  placeholder="search here for products"/>
             <div className="absolute flex items-center left-0 inset-y-0 pl-3 pointer-events-none ">
              <Bell size={20} className=""/>
             </div>
           </div >
      </div>
{/* right side */}
      <div className='flex items-center justify-between gap-5'>
        <div className="hidden md:flex justify-between gap-6 items-center">

         <div>
          <button className="cursor-pointer  rounded-full p-2 bg-gray-100 hover:bg-blue-100" > 
           <Sun size={20}/>
          </button>
         </div>
        <div className="relative cursor-pointer  rounded-full p-2 bg-gray-100 hover:bg-blue-100">
           <Bell size={20}/>
           <span className=" light absolute -top-[9px] text-center text-white -right-2 bg-red-500 rounded-full h-5 w-5">3</span>
        </div>
          <hr className="  h-8 border w-0 border-solid border-l border-gray-300 mx-3" />

          <button className="cursor-pointer light rounded-full p-2 bg-gray-100 hover:bg-blue-100"><User2 /></button>
        </div>
       
        <div>
        <button className="cursor-pointer  rounded-full p-2 bg-gray-100 hover:bg-blue-100">
        <Link href='/setting'>
          <Settings  size={20}/>
          </Link>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Navbar
