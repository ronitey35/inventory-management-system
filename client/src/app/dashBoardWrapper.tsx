import React from 'react'
import Navbar from './(components)/navbar';
import SideBar from './(components)/sidebar';

const DashBoardWrapper = ( {children}: {children:React.ReactNode}) => {
  return (
          <div className='flex min-h-screen max-w-screen-xl  mx-auto  text-gray-900 '>
            <SideBar/>
                <main className='flex gap-5 flex-col w-full  h-screen py-4 px-2  pl-4  '>
                     <Navbar/>
                       
                    {children}
                </main>
          </div>
  )
}

export default DashBoardWrapper
