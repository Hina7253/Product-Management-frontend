import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import AddProduct from "./component/AddProduct";
import EditProduct from "./component/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/editProduct/:id" element={<EditProduct />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
