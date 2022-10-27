import React from "react";
import { Row, Col, Accordion, Card, ListGroup, Spinner } from "react-bootstrap";
import { LeftNavbar } from "./Navbar/LeftNavbar";

const WaitingListPage = ({ handleClickCategory, carts, loading }) => {
  return (
    <>
      <Row>
        <LeftNavbar handleClickCategory={handleClickCategory} />
        <Col md={6} className="mt-3">
          {/* {loading ? (
            <Spinner animation="grow" />
          ) : (
            carts.map((cart) => (
              <Accordion key={cart.id} defaultActiveKey={cart[0]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header># Table No {cart.table}</Accordion.Header>
                  <Accordion.Body>
                    <Card>
                      {cart.product.map((item) => (
                        <ListGroup variant="flush" key={item.id_products}>
                          <ListGroup.Item>{item.name}</ListGroup.Item>
                        </ListGroup>
                      ))}
                    </Card>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))
          )} */}
        </Col>
      </Row>
    </>
  );
};

export default WaitingListPage;
