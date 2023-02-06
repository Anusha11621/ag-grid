import React,{useEffect, useState} from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Details from './Details';
export default function View(props) {
    const [data,setData] = useState(props.data)
    const  [columns,setColumns] = useState([
        { field: 'country', cellRenderer: 'agGroupCellRenderer'},
        { field: 'athlete', },
        { field: 'age' },
        { field: 'year',
        rowGroup:true
    },
        { field: 'date',  },
        { field: 'sport',},
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
        { field: 'total' },
        ])
    console.log(data)
    // useEffect(()=>{setData(props.data)},[props.data])
  return (
    <div className="ag-theme-alpine" style={{height: "100vh", width: "100%"}}>
        
        <AgGridReact
        rowData={data} 
        columnDefs={columns} 
        pagination = {true}
        // masterDetail={true}
        // detailCellRenderer = {(props)=><Details {...props} viewdata={data}/>}
        
        />
    </div>
  )
}
