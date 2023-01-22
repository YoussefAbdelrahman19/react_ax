import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
// import Silder from "./components/Slider";
import Products from "./components/Products";
import Card from "./components/Card";
import Silder from "./components/Slider";
import { Routes, Route, useParams } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Sidebar from "./components/Sidebar";

function App() {
  let params = useParams();
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/Silder" element={<Silder />} />
        <Route path="/card" element={<Card />} />
        <Route path="/productDetails/:productId" element={<ProductDetails />} />
      </Routes> */}

      <div className="row">
        <div className="col-2 sidebar">
          {" "}
          Side bar
          <Sidebar />
        </div>
        <div className="col-10">home page</div>
      </div>
    </>
  );
}

export default App;
