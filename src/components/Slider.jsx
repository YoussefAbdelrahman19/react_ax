function Silder() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://media.istockphoto.com/id/1133980246/photo/shopping-online-concept-shopping-service-on-the-online-web-with-payment-by-credit-card-and.jpg?s=612x612&w=0&k=20&c=joeQ74hTCWThhW6XfnBsCUc5Qp3YB868J-hyBWxGSUM="
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/online-purchasing-payment-e-commerce-banking_53876-127604.jpg?w=2000"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=612x612&w=0&k=20&c=EWKEahyVLY8iAHyirCCDESHRGW37lqUJ7In0SssNSLE="
              //  ss src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fe-commerce&psig=AOvVaw28CtT0eMssDO5adxc_XTZ9&ust=1674254720010000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMDF2YDb1PwCFQAAAAAdAAAAABAS"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Silder;
