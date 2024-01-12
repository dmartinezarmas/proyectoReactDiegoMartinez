import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar'
import ItemListConteiner from './components/ItemListConteiner'

function App() {
  return (
    <>
      <NavBar/>
      <ItemListConteiner greeting={"⚠ Sitio Web en desarrollo, seguinos en nuestras Redes "}/>
    </>
  )
}

export default App
