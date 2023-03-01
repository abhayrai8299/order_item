import "./App.css";
import CartItem from "./components/cartItem";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/Product";
import OrderPage from "./components/orderPage";
import { useState } from "react";
import { useSelector } from "react-redux";
function App() {
  const prods = useSelector((state) => state.cartreducer.productList);
  const [searchvalue, setsearchvalue] = useState("");
  const [productItem, setProductItem] = useState(prods)
  return (
    <>
      <Header
        searchvalue={searchvalue}
        setsearchvalue={setsearchvalue}
        setProductItem={setProductItem}
      />
      <Routes>
        <Route path="/" element={<Product productItem={productItem} />} />
        <Route path="/cart" element={<CartItem setProductItem={setProductItem} />} />
        <Route path="/orderpage" element={<OrderPage />} />

      </Routes>
    </>
  );
}

export default App;
