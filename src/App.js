import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import allProducts from "./products.json";
import Nav from "./components/Nav";
import "./styles/app.css";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(allProducts);
  }, []);

  const Msg = ({ closeToast, toastProps }) => (
    <div className="add-to-cart-alert">
      <div>Added to cart</div>
      <Link to="/cart">View cart</Link>
    </div>
  );

  const addToCart = (item) => {
    const filteredProduct = products.filter(({ id }) => id == item);
    const product = { ...filteredProduct[0], qty: 1 };
    if (!checkForMatch(cart, item)) {
      //if not in car, add
      setCart((state) => [...cart, product]);
    }
    if (checkForMatch(cart, item)) {
      //if in cart, qty+1
      const newCart = cart.map((p) => {
        if (p.id == item) {
          return { ...p, qty: p.qty + 1 };
        } else {
          return { ...p };
        }
      });

      setCart(newCart);
    }
    setTotalQty(totalQty + 1);
    notify();
  };

  const removeFromCart = (itemId) => {
    const arrayToRemove = cart.filter(({ id }) => id == itemId);
    const itemToRemove = arrayToRemove[0];
    const arrayToKeep = cart.filter(({ id }) => id !== itemId);
    setCart(arrayToKeep);
    setTotalQty(totalQty - itemToRemove.qty);
  };

  const reduceCartQty = (id) => {
    const newCart = cart.map((p) => {
      if (p.id == id && p.qty > 1) {
        setTotalQty(totalQty - 1);
        return { ...p, qty: p.qty - 1 };
      } else {
        return { ...p };
      }
    });
    setCart(newCart);
  };

  function checkForMatch(cart, id) {
    //checks if item ID already in cart
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id) return true;
    }
    return false;
  }

  function notify() {
    toast.success(<Msg />);
  }

  return (
    <div className="App">
      <BrowserRouter basename="/shopping-cart">
        <Nav qty={totalQty} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/shopping-cart/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="" element={<Home />} />
          <Route path="/home/" element={<Home />} />
          <Route
            path="/products/"
            exact
            element={<Products addToCart={addToCart} products={products} />}
          />
          <Route
            path="/products/:category/:id"
            element={
              <ProductDetail addToCart={addToCart} products={products} />
            }
          />
          <Route
            path="/cart/"
            element={
              <Cart
                removeItem={removeFromCart}
                reduceQty={reduceCartQty}
                addToCart={addToCart}
                items={cart}
              />
            }
          />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="spacer"></div>
        <Footer qty={totalQty} />
      </BrowserRouter>
    </div>
  );
}

export default App;
