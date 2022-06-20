import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeIndex from './components/home/HomeIndex'
import ContactsIndex from './components/contacts/ContactsIndex'
import ContactsForm from './components/contacts/ContactsForm'
import InvoicesIndex from './components/invoices/InvoicesIndex'
import ItemsIndex from './components/items/ItemsIndex'
import ItemsForm from './components/items/ItemsForm'
import PurchaseIndex from './components/purchase/PurchaseIndex'
import Main from './components/layout/Main'
import SellsIndex from './components/sell/SellsIndex'
import ItemsShow from './components/items/ItemsShow'



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
            <Route path='edit/:id' element={<ItemsForm/>}/>
            <Route path=':id' element={<ItemsShow/>}/>
          </Route>
          <Route path='/invoices' element={<Main/>}>
            <Route index element={<InvoicesIndex/>}/>
          </Route>
          <Route path='/contacts' element={<Main/>}>
            <Route index element={<ContactsIndex/>}/>
            <Route path="add" element={<ContactsForm/>}/>
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
