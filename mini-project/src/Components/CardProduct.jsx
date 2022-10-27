import { Card, Col, Row, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handleAddToCart } from "../Features/cartReducer";

export const CardProduct = ({ loading, category }) => {
  const dispatch = useDispatch();

  return (
    <Row>
      {loading ? (
        <Spinner animation="grow" />
      ) : (
        category.map((product) => (
          <Col className="mt-3" md={3} xs={10} key={product.id_products}>
            <Card onClick={() => dispatch(handleAddToCart(product))} style={{ backgroundColor: "#E3E0E0", height: "100%" }}>
              <Card.Img variant="top" src={"Assets/img/" + product.image_products} />
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
  );
};
