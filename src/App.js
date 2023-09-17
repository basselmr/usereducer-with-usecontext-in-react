//import './App.css';

import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import Cart from "./components/Cart";
import { Productsprovider } from "./contexts/ProductsContext.js"
import { Cartprovider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cartprovider>
          <Header />
          <Productsprovider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Productsprovider>
        </Cartprovider>
      </BrowserRouter>
    </>
  );
}

export default App;
