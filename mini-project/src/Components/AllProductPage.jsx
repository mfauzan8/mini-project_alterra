import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CardProduct } from "./CardProduct";
import { LeftNavbar } from "./Navbar/LeftNavbar";
import { RightNavbar } from "./Navbar/RightNavbar";

const AllProductPage = ({ handleClickCategory, loading, category, handleAddToCart, order, searchProducts, setSearchWords }) => {
  return (
    <Container fluid>
      <Row>
        <LeftNavbar handleClickCategory={handleClickCategory} />
        <Col>
          <CardProduct loading={loading} category={category} handleAddToCart={handleAddToCart} searchProducts={searchProducts} setSearchWords={setSearchWords} />
        </Col>
        <RightNavbar order={order} />
      </Row>
    </Container>
  );
};

export default AllProductPage;
