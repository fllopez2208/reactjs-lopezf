import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';



function App() {
  return (
    <div className="App text-center">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Todos' element={<ItemListContainer/>}/>
            <Route path='/categoria/:productCat' element={<ItemListContainer/>}/>
            <Route path='/Item/:productCod' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<Home/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
