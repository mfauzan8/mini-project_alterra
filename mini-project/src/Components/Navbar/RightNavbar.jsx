import React, { useEffect, useState } from "react";
import { Spinner, Badge, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCarts } from "../../api";
import { setCarts } from "../../Features/cartReducer";

export const RightNavbar = ({ order }) => {


  return (
    <div className="d-flex flex-column flex-shrink-0 p-1 text-white" style={{ width: "400px", backgroundColor: "#120200" }}>
      <div className="d-flex justify-content-center pt-2">
        <h4>Current Order</h4>
      </div>
      {
        order.map((cart) => (
          <div className="mt-2" key={cart.id}>
            {cart.product.map((item) => (
              <Container key={item.id_products} fluid>
                <div className="d-flex flex-row align-items-center" >
                  <div className="col-md-5 xs-3">
                    <img src={"Assets/img/" + item.image_products} className="img-fluid rounded border border-2" />
                  </div>
                  <div className="col ms-3">
                    <h6>
                      <span>{item.name}</span>
                    </h6>
                    <p>Rp. {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                    <h6><Badge bg="light" text="dark">{cart.quantity}</Badge></h6>
                  </div>
                </div>
              </Container>
            ))}
          </div>
        ))
      }
    </div>
  );
};
