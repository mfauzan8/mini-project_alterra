import { Card, Col, Row, Spinner, Form } from "react-bootstrap";

export const CardProduct = ({ loading, category, handleAddToCart, searchWords, setSearchWords }) => {

  return (
    <>
      <div className="mt-4 mb-4">
        <Form.Control type="searchData" placeholder="Search Food or Drink" style={{ width: "50%" }} className="shadow rounded-pill" value={searchWords} onChange={(ev) => setSearchWords(ev.currentTarget.value)} />
      </div>
      <Row>
        {loading ? (
          <Spinner animation="grow" />
        ) : (
          category.map((product) => (
            <Col md={3} xs={10} key={product.id_products}>
              <Card onClick={() => handleAddToCart(product)} style={{ backgroundColor: "#E3E0E0", height: "87%" }}>
                <Card.Img variant="top" src={"Assets/img/" + product.image_products} style={{ maxHeight: "50%" }} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.details_product}</Card.Text>
                  <Card.Subtitle>
                    <span>Rp. {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </>
  );
};
