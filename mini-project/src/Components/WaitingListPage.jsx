import React from "react";
import { Row, Col, Accordion, Card, ListGroup, Spinner, Container } from "react-bootstrap";
import { LeftNavbar } from "./Navbar/LeftNavbar";

const WaitingListPage = ({ handleClickCategory, tables, loading }) => {
  return (
    <>
      <Container fluid>
        <Row style={{ height: '100vh' }}>
          <LeftNavbar handleClickCategory={handleClickCategory} />
          <Col md={6} className="m-5">
            <h1>Waiting List Order</h1>
            {loading ? (
              <Spinner animation="grow" />
            ) : (
              tables.map((table) => (
                <Accordion key={table.id} defaultActiveKey={table.id} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Table No {table.no_table}</Accordion.Header>
                    <Accordion.Body>
                      <Card>
                        {table.order.map((singleOrder) => (
                          <ListGroup variant="flush" key={singleOrder.id}>
                            Order #{singleOrder.id}

                            {singleOrder.products.map((product) =>
                              <ListGroup.Item>{product.name}</ListGroup.Item>
                            )}
                          </ListGroup>
                        ))}
                      </Card>
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
