import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import './App.css'
import HomeIndex from './components/home/HomeIndex'
import InvoicesIndex from './components/invoices/InvoicesIndex'
import ItemsIndex from './components/items/ItemsIndex'
import ItemsForm from './components/items/ItemsForm'
import PurchaseIndex from './components/purchase/PurchaseIndex'
import Main from './components/layout/Main'
import SellsIndex from './components/sell/SellsIndex'


//https://demos.creative-tim.com/notus-nextjs/landing

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<HomeIndex />} />
          </Route>
          <Route path='/purchase' element={<Main/>}>
            <Route index element={<PurchaseIndex/>}/>
          </Route>
          <Route path='/sell' element={<Main/>}>
            <Route index element={<SellsIndex/>}/>
          </Route>
          <Route path='/items' element={<Main/>}>
            <Route index element={<ItemsIndex/>}/>
            <Route path='add' element={<ItemsForm/>}/>
          </Route>
          <Route path='/invoices' element={<Main/>}>
            <Route index element={<InvoicesIndex/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
