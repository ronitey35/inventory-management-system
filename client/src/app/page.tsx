"use client"

import { LineChart } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts/PieChart';
import Card_PopularProducts from './(dashboard_components)/card_PopularProducts';
import Card_Invoices from './(dashboard_components)/card_Invoices';

export default function Home() {
  return (



<div className="flex flex-col gap-4">
   
  <div className="grid grid-cols-2 lg:grid-cols-4  gap-5  ">
    <div className="flex flex-col justify-between py-2  gap-2 items-center border rounded-lg">
      <h1 className="font-semibold text-xl ">Total Revenue</h1>
      <h2 className="font-semibold text-blue-600 text-xl">$ 45,365.00 </h2>
      
    </div>
    <div className="flex flex-col justify-between py-2  gap-2 items-center border rounded-lg ">
      <h1 className="font-semibold text-xl ">Shipped</h1>
      <h2 className="text-xl font-bold text-blue-500">30</h2>
    </div>
    <div className="flex flex-col justify-between py-2  gap-2 items-center border rounded-lg  ">
      <h1 className="font-semibold text-xl ">Pending</h1>
      <h2 className="text-xl font-bold text-blue-500">3</h2>
    </div>
    <div className="border rounded-lg flex flex-col py-4 justify-between items-center  ">
      <h1 className="font-semibold text-xl ">New Orders</h1>
      <h2 className="text-xl font-bold text-blue-500">20</h2>
    </div>


    
  
  </div>



<div className="grid grid-cols-1 md:grid-cols-8 xl:overflow-auto pb-4 gap-5 ">
<div className=" border rounded-lg col-span-5  h-[30vh] ">
<LineChart
className='h-full w-full'
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />

</div>
<div className="col-span-3 border rounded-lg h-[32vh]">
  <PieChart
className='h-full w-full '
width={400}
  series={[
    {
    
      data: [
        { id: 0, value: 10, label: 'Clothes', },
        { id: 1, value: 15, label: 'Shoes ' },
        { id: 2, value: 20, label: 'Bags' },
      ],

      innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -90,
      endAngle: 180,
      cx: 150,
      cy: 100,
      
    }
  ]}
/>
</div>

<div onClick={()=> {}} className="col-span-4 border rounded-lg rounded-b-none overflow-hidden h-[33vh]">
  <h1  className='font-semibold text-lg tracking-tighter border-b text-center  '>Invoices</h1>
  <Card_Invoices/>
</div>
<div className="col-span-4 border rounded-lg h-[33vh] overflow-scroll">
  <Card_PopularProducts />
</div>
</div>
</div>
  );
}
