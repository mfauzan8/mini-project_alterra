import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CardProduct } from "./CardProduct";
import { LeftNavbar } from "./Navbar/LeftNavbar";
import { RightNavbar } from "./Navbar/RightNavbar";

const AllProductPage = ({ handleClickCategory, loading, category }) => {
  return (
    <Container fluid>
      <Row>
        <LeftNavbar handleClickCategory={handleClickCategory} />
        <Col>
          <CardProduct loading={loading} category={category} />
        </Col>
        <RightNavbar />
      </Row>
    </Container>
  );
};

export default AllProductPage;
