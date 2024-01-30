import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar'
import ItemListConteiner from './components/ItemListConteiner'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route>

          </Route>

        </Routes>
      </BrowserRouter>
      <ItemListConteiner greeting={"⚠ Sitio Web en desarrollo, seguinos en nuestras Redes "}/>
    </>
  )
}

export default App
