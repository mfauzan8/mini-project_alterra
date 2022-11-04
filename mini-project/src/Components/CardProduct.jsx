import { Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import LoadingSvg from "./LoadingSvg";

export const CardProduct = ({ loading, category, handleAddToCart, searchProducts, setSearchWords }) => {

  return (
    <>
      <InputGroup className="mb-4 mt-4 ">
        <InputGroup.Text id="iconSearch"><i className="bi bi-search"></i></InputGroup.Text>
        <Form.Control type="searchData" placeholder="Search Food or Drink" id="searchData"
          value={searchProducts} onChange={(ev) => setSearchWords(ev.currentTarget.value)}
        />
      </InputGroup>
      <Row>
        {loading ? (
          <LoadingSvg />
        ) : (
          category.map((product) => (
            <Col xl={3} md={6} xs={10} key={product.id_products}>
              <Card id="cardProduct" onClick={() => handleAddToCart(product)} style={{ height: "20rem" }}>
                <Card.Img variant="top" src={"Assets/img/" + product.image_products} style={{ maxHeight: "50%", padding: "3px" }} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text id="productDetail">{product.details_product}</Card.Text>
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
