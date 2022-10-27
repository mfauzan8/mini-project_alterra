import React from "react";
import { Link } from "react-router-dom";
import { Container, Image, Stack, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="home">
      <Stack direction="horizontal">
        <Stack>
          <Image src="/Assets/img/LogoHome.png" style={{ width: "18%", padding: "30px" }} />
          <Container>
            <Col md={8} style={{ padding: "3rem" }}>
              <div className="TextHeader">
                MEET, <span>EAT</span> & <span>ENJOY</span> THE GOOD <span>TASTE</span>
              </div>
              <div className="TextSubHeader">We deliver 100% Fresh Food and drink. You can order right now!</div>
              <Link to={"/menu"}>
                <button className="btnOurmenu">
                  OUR MENU <i className="bi bi-card-checklist"></i>
                </button>
              </Link>
            </Col>
          </Container>
        </Stack>

        <Image src="/Assets/img/ImageHome.png" className="h-100 position-absolute end-0 top-0" />
      </Stack>
    </div>
  );
};

export default HomePage;
