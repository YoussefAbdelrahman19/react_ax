import "./products.css";
import { Link, useParams } from "react-router-dom";

function Card(props) {
  let params = useParams();
  console.log("parmas fom card", params);
  return (
    <>
      <div className=" p-1 m-1 products-style h-25">
        <div className="">
          <div className="">
            <div className="card">
              <img src={props.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                {/* <button className="btn btn-primary"> */}
                <Link
                  to={`/productDetails/${props.id}`}
                  className="btn btn-primary"
                >
                  Details
                </Link>
                {/* </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
