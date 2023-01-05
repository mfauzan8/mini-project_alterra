import { Col, Image } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export const LeftNavbar = ({ handleClickCategory, active }) => {
  return (
    <div className="left-navbar d-flex flex-column flex-shrink-0 pt-3 pe-0 ps-0 text-white" style={{ width: "70px", backgroundColor: "#120200" }}>
      <Col>
        <Link to="/">
          <Image src="/Assets/img/Logo.png" style={{ width: "100%" }} />
        </Link>
        <hr className="line" />
        <Image src="/Assets/icons/all.png" name="All" className={active === "All" ? "icon-sidebar active" : "icon-sidebar"} onClick={(e) => handleClickCategory(e.target.name)} />
        <Image src="/Assets/icons/food.png" name="food" className={active === "food" ? "icon-sidebar active" : "icon-sidebar"} onClick={(e) => handleClickCategory(e.target.name)} />
        <Image src="/Assets/icons/drink.png" name="drink" className={active === "drink" ? "icon-sidebar active" : "icon-sidebar"} onClick={(e) => handleClickCategory(e.target.name)} />
        <div className="icon">
          <NavLink to="/waiting-list" className={({ isActive }) => (isActive ? "actived" : "deactived")}>
            <i className="bi bi-stopwatch-fill icon-waiting"></i>
          </NavLink>
        </div>
      </Col>
    </div >
  );
};
