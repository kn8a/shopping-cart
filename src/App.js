import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {

  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
