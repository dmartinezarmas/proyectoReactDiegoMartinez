import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar'
import ItemListConteiner from './components/ItemListConteiner'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<ItemListConteiner greeting={"⚠ En desarrollo, seguinos en nuestras Redes "}/>} />
          <Route path={"/category/:id"} element={<ItemListConteiner />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
