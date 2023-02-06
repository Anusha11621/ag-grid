import React,{useState} from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
export default function Details(props) {
    const [viewData,setViewData] = useState(props.viewdata)
    const  [columns,setColumns] = useState([
        { field: 'country', cellRenderer: 'agGroupCellRenderer'},
        { field: 'athlete', },
        { field: 'age' },
        { field: 'year',rowGroup:true },
        { field: 'sport',},
        ])
    console.log(props.viewdata);
  return (
    <div>
        <h3>{props.data.athlete}</h3>
        <div className="ag-theme-alpine" style={{height: 370, width: "100%"}}>
        
        <AgGridReact
        rowData={viewData} 
        columnDefs={columns} 
        defaultColDef = {{flex:1}}
        />
    </div>
    </div>
  )
}
