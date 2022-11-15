import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Checkout from "./pages/checkout";
import Confirmation from "./pages/checkout/Confirmation";
import NavBar from "./pages/global/NavBar";
import Home from "./pages/home";
import ItemDetails from "./pages/itemDetails";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:itemId" element={<ItemDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
