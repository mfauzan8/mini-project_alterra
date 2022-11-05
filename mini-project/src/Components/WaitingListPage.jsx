import React from "react";
import { Row, Col, Accordion, ListGroup, Container } from "react-bootstrap";
import LoadingSvg from "./LoadingSvg";
import { LeftNavbar } from "./Navbar/LeftNavbar";

const WaitingListPage = ({ handleClickCategory, tables, loading }) => {
  return (
    <>
      <Container fluid>
        <Row style={{ height: '100vh' }}>
          <LeftNavbar handleClickCategory={handleClickCategory} />
          <Col md={6} xs={9} id="ColWaitingList">
            <h1 className="mb-4">Waiting List Order</h1>
            {loading ? (<div className="d-flex justify-content-start">
              <LoadingSvg />
            </div>
            ) : (
              tables.map((table) => (
                <Accordion key={table.id} defaultActiveKey={table.id} alwaysOpen style={{ margin: "5px" }}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header><strong>Table No {table.no_table}</strong></Accordion.Header>
                    <Accordion.Body>
                      {table.order.map((singleOrder) => (
                        <ListGroup variant="flush" key={singleOrder.id} style={{ padding: "2px" }}>
                          Order #{singleOrder.id}

                          {singleOrder.products.map((product) =>
                            < ListGroup.Item key={product.id}><strong>{singleOrder.quantity}</strong>  {product.name}</ListGroup.Item>
                          )}
                        </ListGroup>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ))
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WaitingListPage;
