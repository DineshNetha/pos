import { useState } from 'react'
import NavBar from './NavBar'
import DiningTable from './DiningTable'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TableFoodOrder from './TableFoodOrder'

function App() {
  return (
    <div>
      <Router>
      <NavBar/>
        <Routes>
          <Route path='/' element={<DiningTable/>}/>
          <Route path="/tablefoodorder/:tableNumber" element={<TableFoodOrder />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
