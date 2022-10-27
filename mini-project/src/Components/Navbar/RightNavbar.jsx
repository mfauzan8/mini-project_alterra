import React, { useEffect, useState } from "react";
import { Spinner, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCarts } from "../../api";
import { setCarts } from "../../Features/cartReducer";

export const RightNavbar = () => {
  const carts = useSelector((state) => state.cartlist.carts);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCarts()
      .then((res) => {
        dispatch(setCarts(res));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(carts);

  return (
    <div className="d-flex flex-column flex-shrink-0 p-4 text-white" style={{ width: "400px", backgroundColor: "#120200" }}>
      <div className="d-flex justify-content-center pt-2">
        <h4>Current Order</h4>
      </div>
      {loading ? (
        <Spinner animation="grow" />
      ) : (
        carts?.map((cart) => (
          <div className="mt-2" key={cart.id}>
            {cart.product.map((item) => (
              <div className="d-flex flex-row" key={item.id_products}>
                <div className="col-md-4">
                  <img src={"Assets/img/" + item.image_products} className="img-fluid rounded border border-2" />
                </div>
                <div className="col md-4 ms-4">
                  <h6>
                    <span>{item.name}</span>
                  </h6>
                  <p>Rp. {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                </div>
                <div className="col-md-1">
                  <Badge bg="secondary">{cart.quantity}</Badge>
                </div>

                {/* <div className="card mb-3" style={{ maxWidth: "28rem", maxHeight: "10rem" }}>
                  <div className="row g-0">
                    
                    <div className="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <h6 class="card-text">{item.price} </h6>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};
