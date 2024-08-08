
"use client"
import { cn } from '@/lib/utils'
import { CircleDollarSign, LayoutDashboard, Menu, MenuIcon, Settings2, ShoppingBag, ShoppingBasket, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const SideBar = () => {

const pathName = usePathname()
console.log(pathName)

  return (
    <div className='hidden md:flex flex-col pt-8 border-r-1 border-gray-600 px-4  '>
      <div className='flex gap-4 items-center justify-between '>
        <span>logo</span>
        <h1 className='font-semibold text-xl'>Inventory</h1>
      </div>

         {/* links */}

      <div className='flex flex-col gap-6 mt-16'>
            <a href='/' className={cn(" light flex gap-4 items-center px-4 py-3 rounded-lg  justify-start",{
              'bg-blue-400': pathName=='/'
            }
              
            )}>
                 <LayoutDashboard/>
                 <h1 className='text-xl font-medium'>Dashboard</h1>
            </a>
            
            <a href='/inventory' className={cn(" light flex gap-4 items-center px-4 py-3 rounded-lg  justify-start",{
              'bg-blue-400': pathName == '/inventory'
            }
               )}>
            <ShoppingBasket />
                 <h1 className='text-xl font-medium'>Inventory</h1>
            </a>
            <Link href='/products' className=' light flex gap-4 items-center px-4 py-3 rounded-lg  justify-start'>
            <ShoppingBag />
                 <h1 className='text-xl font-medium'>Produccts</h1>
            </Link>
            <Link href="/users" className=' light flex gap-4 items-center px-4 py-3 rounded-lg  justify-start'>
            <Users/>
                 <h1 className='text-xl font-medium'>Users</h1>
            </Link>
            <Link href="/setting" className=' light flex gap-4 items-center px-4 py-3 rounded-lg justify-start'>
            <Settings2/>
                 <h1 className='text-xl font-medium'>Setting</h1>
            </Link>
            <Link href='/expenses' className=' light flex gap-4 items-center px-4 py-3 rounded-lg  justify-start'>
            <CircleDollarSign/>
                 <h1 className='text-xl font-medium'>Expenses</h1>
            </Link>
            




            
      </div>


      {/* footer */}
      <div>
        <p>&copy;</p>
      </div>
    </div>
  )
}

export default SideBar
