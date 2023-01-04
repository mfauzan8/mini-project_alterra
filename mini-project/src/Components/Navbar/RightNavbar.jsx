import React, { useState } from "react";
import { Container, Image, Form } from "react-bootstrap";
import { client } from "../../api"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";


export const RightNavbar =
  ({
    order,
    setOrder,
    deleteById,
    handleBtnPlus,
    handleBtnMinus }) => {


    const [table, setTable] = useState("")

    const navigate = useNavigate()
    const sumSubTotal = order.reduce(function (result, item) {
      return result + item.subtotal
    }, 0)
    const sumTax = order.reduce(function (result, item) {
      return result + item.tax
    }, 0)
    const sumTotal = sumSubTotal + sumTax

    const changeSetTable = (ev) => {
      setTable(ev.target.value)
    }

    const handleOrder = async () => {
      const dataTable = {
        no_table: table,
        total_bayar: sumTotal
      }
      await client.post("/table", dataTable)
        .catch((err) =>
          toast.warning('Please Input Table Number', {
            position: "top-right",
            autoClose: 3000,
          })
        )

      const dataOrder = order.map((o) => ({ ...o, no_table: table }))
      const dataOrderList = {
        objects: dataOrder
      }
      await client.post("/orderlist", dataOrderList)

      await client.delete("/")
      setOrder([])
      navigate("/waiting-list")
    }

    return (
      <div className="right-navbar d-flex flex-column flex-shrink-0 p-1 text-white " style={{ width: "400px", backgroundColor: "#120200" }}>
        <div className="d-flex justify-content-center pt-4">
          <h3><i className="bi bi-cart-check-fill"></i> Current Order </h3>
        </div>
        <div className="mt-4 mb-4 p-3 pb-0">
          <Form.Control type="searchData" id="inputTable" placeholder="Input Table Number" style={{ backgroundColor: "#4f0000", color: "white", border: "none" }}
            className="shadow rounded-pill" value={table} onChange={changeSetTable}
            required />
        </div>

        <Container style={{ height: "49vh" }}>
          <div className="overflow-auto h-100">
            {
              order.map((cart) => (
                <div className="mt-2 " key={cart.id}>
                  {cart.product.map((item) => (
                    <Container key={item.id_products} fluid>
                      <div className="d-flex flex-row align-items-center" >
                        <div className="col-md-4 sm-2">
                          <Image id="cartImage" src={"Assets/img/" + item.image_products} className="img-fluid rounded border border-2" />
                        </div>
                        <div className="col ms-3 ">
                          <h6>
                            <span>{item.name}</span>
                          </h6>

                          <p>Rp. {cart.subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                          <h6>
                            <button className="btn-cart me-1" onClick={() => handleBtnMinus(cart)}><i className="bi bi-dash"></i></button>
                            <button className="btn-quantity me-1" disabled>{cart.quantity}</button>
                            <button className="btn-cart me-1" onClick={() => handleBtnPlus(cart)}><i className="bi bi-plus"></i></button>
                            <button className="btn-cart" style={{ color: "red" }} onClick={() => deleteById(cart)}><i className="bi bi-trash3-fill"></i></button>
                          </h6>
                        </div>
                      </div>
                    </Container>
                  ))}
                </div>
              ))
            }
          </div>
        </Container>
        <div className="d-flex flex-column m-2 mt-4">
          <div className="total">
            <div className="summary">
              <p>Subtotal :</p>
              <p>Rp. {sumSubTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} </p>
            </div>
            <div className="summary">
              <p>Tax 10% :</p>
              <p>Rp. {sumTax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
            </div>
            <hr className="hrSummary" />
            <div className="sumTotal">
              <i>Total :</i>
              <p>Rp. {sumTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
            </div>
          </div>
          <button className="btn-total" onClick={handleOrder}>Order Now</button>
        </div>
      </div >
    );
  };
