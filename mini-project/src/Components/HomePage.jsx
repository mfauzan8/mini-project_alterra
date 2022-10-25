import React from "react";
import ImageHome from "../Assets/img/ImageHome.png";
import { Link } from "react-router-dom";
import { Row, Col, Container, Image, Button, Stack } from "react-bootstrap";
import LogoHome from "../Assets/img/LogoHome.png";
import "../Assets/css/home.css";

const HomePage = () => {
  return (
    <div className="home">
      <Container fluid>
        <Stack direction="horizontal">
          <Stack gap={4}>
            <div className="logoHome">
              <Image src={LogoHome} />
            </div>

            <div className="TextHeader">
              MEET, <span>EAT</span> & <span>ENJOY</span> THE GOOD <span>TASTE</span>
            </div>
            <div className="TextSubHeader">We deliver 100% Fresh Food and drink. You can order right now!</div>
            <Link to={"/menu"}>
              <Button className="btnOurmenu">OUR MENU</Button>
            </Link>
          </Stack>
          <Image src={ImageHome} className="imageHome" />
        </Stack>
      </Container>
    </div>
  );
};

export default HomePage;
