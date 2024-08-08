import React from 'react'


import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const Card_Invoices = () => {

      const columns : GridColDef[]= [
        { field: 'id', headerName: 'Invoice ID', width: 70 ,},
        { field: 'customerName', headerName: 'Customer Name', width: 120 },
        { field: 'date', headerName: 'Date', width: 120 },
        { field: 'totalAmount', headerName: 'Total Amount', type: 'number', width: 90 },
        { field: 'status', headerName: 'Status', width: 100 },
      ];
      
      const rows: GridRowsProp =[
        { id: 1, customerName: 'John Doe', date: '2024-08-01', totalAmount: 150.75, status: 'Paid' },
        { id: 2, customerName: 'Jane Smith', date: '2024-08-02', totalAmount: 200.00, status: 'Pending' },
        { id: 3, customerName: 'Alice Johnson', date: '2024-08-03', totalAmount: 99.99, status: 'Paid' },
        { id: 4, customerName: 'Bob Brown', date: '2024-08-04', totalAmount: 250.50, status: 'Cancelled' },
        { id: 5, customerName: 'Charlie Davis', date: '2024-08-05', totalAmount: 320.00, status: 'Paid' },
        { id: 6, customerName: 'David Wilson', date: '2024-08-06', totalAmount: 450.25, status: 'Pending' },
        { id: 7, customerName: 'Emma Williams', date: '2024-08-07', totalAmount: 180.40, status: 'Paid' },
        { id: 8, customerName: 'Frank Miller', date: '2024-08-08', totalAmount: 220.85, status: 'Cancelled' },
        { id: 9, customerName: 'Grace Taylor', date: '2024-08-09', totalAmount: 305.15, status: 'Pending' },
        { id: 10, customerName: 'Henry Anderson', date: '2024-08-10', totalAmount: 275.60, status: 'Paid' },

      ];
      
  return (
    
        
      <DataGrid rows={rows} columns={columns}  hideFooter={true} disableRowSelectionOnClick  className='h-full w-full border-0 p-0 pb-6' />

  )
}

export default Card_Invoices
