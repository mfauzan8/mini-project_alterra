import React from "react";
import { Image } from "react-bootstrap";
import "../Assets/css/home.css";

const HomePage = () => {
  return (
    <div className="d-flex mb-3 justify-content-around">
      <div className="p-2">Flex item 1</div>
      <div className="p-2">
        <Image src="./Assets/img/ImageHome.png" />
      </div>
    </div>
  );
};

export default HomePage;
