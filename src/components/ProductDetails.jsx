import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ProductDetailsCard from "./ProductDetailsCard";

function ProductDetails(props) {
  let [product, setProduct] = useState([]);
  let params = useParams();
  console.log("params are :", params);
  console.log("props are :", props);
  let apiUrl = `https://fakestoreapi.com/products/${params.productId}`;
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(product);
  return (
    <>
      <p>Product Details</p>
      <ProductDetailsCard product={product} />
    </>
  );
}

export default ProductDetails;
