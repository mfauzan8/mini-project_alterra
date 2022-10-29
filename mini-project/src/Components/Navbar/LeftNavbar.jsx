import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export const LeftNavbar = ({ handleClickCategory }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 pt-3 pe-0 ps-0 text-white" style={{ width: "70px", backgroundColor: "#120200" }}>
      <Col>
      <Link to="/">
        <Image src="/Assets/img/Logo.png" style={{ width: "100%" }} />
      </Link>
      <hr className="line" />
      <Image src="/Assets/icons/all.png" name="All" style={{ width: "100%", padding: "10px 20px" }} onClick={(e) => handleClickCategory(e.target.name)} />
      <Image src="/Assets/icons/food.png" name="1" style={{ width: "100%", padding: "10px 15px" }} onClick={(e) => handleClickCategory(e.target.name)} />
      <Image src="/Assets/icons/drink.png" name="2" style={{ width: "100%", padding: "10px 15px" }} onClick={(e) => handleClickCategory(e.target.name)} />
      <Link to="/waiting-list">
        <Image src="/Assets/icons/wait.png" style={{ width: "100%", padding: "20px 15px" }} />
      </Link>
      </Col>
    </div>
  );
};
