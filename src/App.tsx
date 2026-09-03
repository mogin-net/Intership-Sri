import { Routes, Route } from "react-router-dom";
import Navbar from "./componens/navbar";
import Home from "./pages/home";
import Categories from "./pages/categories";
import Products from "./pages/products";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
