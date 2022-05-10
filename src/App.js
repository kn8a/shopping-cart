import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import ProductDetail from "./components/ProductDetail";
import allProducts from './products.json';
import Nav from "./components/Nav";
import './styles/app.css';

function App() {

  const [cart, setCart] = useState([]);
  const [totalQty, settotalQty] = useState([]);
  const [products, setProducts] = useState([]);


  useEffect(() => {
      setProducts(allProducts);
     },[])


  const addToCart = (item) => {
    const filteredProduct = products.filter(({id}) => id == item)
    const product = {...filteredProduct[0], qty:1};
    if (!checkForMatch(cart, item)) { //if not in car, add
      setCart(state => [...cart, product]);
      console.log(cart);
    }
    if (checkForMatch(cart, item)) { //if in cart, qty+1
      const newCart = cart.map(p => {
        if (p.id == item) {
          return {...p, qty: p.qty+1}
        }
        else {
          return {...p}
        }
      })
      setCart(newCart);
      console.log(cart);
    }
  }
  

  function checkForMatch(cart, id){ //checks if item ID already in cart
    for(let i = 0; i < cart.length; i++){
        if(cart[i].id == id)
            return true;
    }
    return false;
  }


  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav/>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/home/" element={<Home />} />
            <Route path="/products/"  exact element={<Products addToCart={addToCart} products={products}/>} />
            <Route path="/products/:category/:id" element={<ProductDetail addToCart={addToCart} products={products}/>} />
            <Route path="/cart/" element={<Cart items={cart} />}/>
        </Routes>
      </BrowserRouter>
      <button>test</button>
    </div>
  );
}

export default App;
