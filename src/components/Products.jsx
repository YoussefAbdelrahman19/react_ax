import Card from "./Card";
import { useEffect, useState } from "react";

function Products() {
  const apiUrl = "https://fakestoreapi.com/products";
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setproducts(data));
  }, []);

  console.log(products);
  return (
    <>
      <div className="font-bold text-primary">Products </div>
      <div
        className="center-block"
        style={{ backgroundColor: "yellow", width: "200px" }}
      >
        center block
      </div>
      <div className="btn-group btn-group-justified text-dark ">
        <div className="p-2 fs-2">div1</div>
        <div className="p-2 fs-2">div1</div>
        <div className="p-2 fs-2">div1</div>
      </div>
      {/* product */}
      <h1 className="text-info badge ">Invalid Feedbacksssssssss</h1>

      <div className="product">
        <div className="container">
          <div className="row">
            {products.map((c) => {
              return (
                <div className=" col-sm-6 col-lg-3 ">
                  <Card
                    image={c.image}
                    title={c.title}
                    description={c.description}
                    id={c.id}
                  />
                </div>
              );
            })}

            <div className="col-4">
              <Card />
            </div>
            <div className="col-4">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
