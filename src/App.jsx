import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RouteError from './components/RouteError'
import NavBar from './components/navBar'
import Cart from './components/Cart'
import CartContextProvider from './components/context/CartContext'

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/categoria/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
            <Route path={"/cart"} element={<Cart/>} />
            <Route path={"*"} element={<RouteError/>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
