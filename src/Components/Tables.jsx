import React, { useEffect, useState, useCallback } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Link } from 'react-router-dom';
export default function Tables(props) {
    const [pageValue,setPageValue] = useState(0)
    const [csvData, setCsvData] = useState('')
    const [selected,setSelected] = useState([])
    const [data,setData] = useState([
    ])
    const  [columns,setColumns] = useState([
    { field: 'country',
    checkboxSelection: true  
     },
    { field: 'athlete',},
    { field: 'age' },
    { field: 'year', },
    { field: 'date',  },
    { field: 'sport',},
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
    ])
    useEffect(()=>{
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setData(data));
        
    },[])
    const defaultdefs = {
        sortable :true,editable:true,filter:true,floatingFilter:true,flex:1,
    }

    // to download csv file
    const onGridReady = (params)=>{
        let gridApi;
        gridApi = params.api
        setCsvData(gridApi)
    }
    const onExportClick = ()=>{
        csvData.exportDataAsCsv()
    }
    // to download csv file

    //to select a cells
    const cellClickedListener = useCallback( event => {
        // console.log('cellClicked', event);
      }, []);
    //to select a cells

    //pagination dropdown
      const page = (e)=>{
        setPageValue(e.target.value)
      }

    const  rowSelectionType = 'multiple'
    // const onSelectionChanged =(e)=>{
    //     setSelected(e.api.getSelectedRows());
    // }
    // console.log(selected)

    const clback = (data)=>{
        // console.log(data.api.getSelectedRows());
        props.cb(data.api.getSelectedRows())
    }
    
  return (
    <>
    <button onClick={()=>onExportClick()}> Export </button>
    &emsp;
    <select onChange={page}>
        <option>10</option>
        <option>20</option>
        <option>30</option>
        <option>50</option>
    </select>
    &emsp;
    <Link to='/view'>
    <button>process</button>
    </Link>
    <p>{props.count}</p>
    <div className="ag-theme-alpine" style={{height: 570, width: "100%"}}>
    <br></br>
        <AgGridReact
         rowData={data} 
         columnDefs={columns} 
         defaultColDef = {defaultdefs}
         pagination = {true}
         paginationPageSize ={pageValue}
        //  paginationAutoPageSize ={true}
         onGridReady = {onGridReady}
         onCellClicked = {cellClickedListener}
         rowSelection = {rowSelectionType}
         onSelectionChanged = {clback}
         rowMultiSelectWithClick = {true}
         />
    </div>
    </>
    
  )
}
