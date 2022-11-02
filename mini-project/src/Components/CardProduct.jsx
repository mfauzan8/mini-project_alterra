import { Card, Col, Row, Spinner, Form, InputGroup } from "react-bootstrap";

export const CardProduct = ({ loading, category, handleAddToCart, searchProducts, setSearchWords }) => {

  return (
    <>
      <InputGroup className="mb-4 mt-4 ">
        <InputGroup.Text id="iconSearch"><i class="bi bi-search"></i></InputGroup.Text>
        <Form.Control type="searchData" placeholder="Search Food or Drink" id="searchData"
          value={searchProducts} onChange={(ev) => setSearchWords(ev.currentTarget.value)}
        />
      </InputGroup>
      <Row>
        {loading ? (<center>
          <Spinner animation="grow" /></center>
        ) : (
          category.map((product) => (
            <Col xl={3} md={12} xs={10} key={product.id_products}>
              <Card onClick={() => handleAddToCart(product)} style={{ backgroundColor: "#E3E0E0", height: "87%" }}>
                <Card.Img variant="top" src={"Assets/img/" + product.image_products} style={{ maxHeight: "50%", padding: "3px" }} />
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
