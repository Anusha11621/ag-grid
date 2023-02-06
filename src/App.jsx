import { useState } from 'react'
import Tables from './Components/Tables'
import View from './Components/View'

import './App.css'
import {BrowserRouter, Routes, Route  } from 'react-router-dom'
function App() {
  const [value,setValue] = useState([])
  const onvalueChange = (data)=>{
    setValue(data)
  }
  // console.log(value);
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Tables cb={onvalueChange}/>}/>

        <Route path='/view'  element={<View data={value}/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Crud/> */}
      
    </div>
  )
}

export default App
