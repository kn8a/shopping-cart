import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import ProductDetail from "./components/ProductDetail";
import allProducts from './products.json';
import Nav from "./components/Nav";
import './styles/app.css';
import Footer from "./components/Footer";

function App() {

  const [cart, setCart] = useState([]);
  const [totalQty, setTotalQty] = useState((0));
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
    setTotalQty(totalQty+1)
  }

  const removeFromCart = (itemId) => {
    const arrayToRemove = cart.filter(({id}) => id == itemId)
    const itemToRemove = arrayToRemove[0]
    const arrayToKeep = cart.filter(({id}) => id !== itemId)
    setCart(arrayToKeep);
    setTotalQty(totalQty-(itemToRemove.qty)) 
  }

  const reduceCartQty = (id) => {
    const newCart = cart.map(p => {
      if (p.id == id && p.qty > 1) {
           setTotalQty(totalQty-1)
          return {...p, qty: p.qty-1}
      }
      else {
        return {...p}
      }
    })
    setCart(newCart)
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
        <Nav qty={totalQty}/>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/home/" element={<Home />} />
            <Route path="/products/"  exact element={<Products addToCart={addToCart} products={products}/>} />
            <Route path="/products/:category/:id" element={<ProductDetail addToCart={addToCart} products={products}/>} />
            <Route path="/cart/" element={<Cart removeItem={removeFromCart} reduceQty={reduceCartQty} addToCart={addToCart} items={cart} />}/>
        </Routes>
        <div className="spacer"></div>
        <Footer qty={totalQty}/>
      </BrowserRouter>
    </div>
  );
}

export default App;