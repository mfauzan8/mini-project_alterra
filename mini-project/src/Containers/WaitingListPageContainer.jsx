import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WaitingListPage from "../Components/WaitingListPage";

const WaitingListPageContainer = () => {
  const products = useSelector((state) => state.productlist.products);
  const [category, setCategory] = useState(products);
  const navigate = useNavigate();

  const handleClickCategory = (e) => {
    navigate("/menu");
    if (e !== "All") {
      let productFilter = products.filter((object) => object.id_categories === +e);
      setCategory(productFilter);
    } else {
      setCategory(products);
    }
  };
  return <WaitingListPage handleClickCategory={handleClickCategory} />;
};

export default WaitingListPageContainer;
