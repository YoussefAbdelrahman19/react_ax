function ProductDetailsCard(props) {
  let product = props.product;

  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="card text-black">
                <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="Apple Computer"
                />
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="text-muted mb-4">{product.description}</p>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>{product.title} Price</span>
                      <span>{product.price}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Category</span>
                      <span>{product.category}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Price</span>
                      <span>$199</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <span>Total</span>
                    <span>$7,197.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetailsCard;
