import React, { useEffect, useState } from "react";
import { getTableOrder } from "../api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WaitingListPage from "../Components/WaitingListPage";

const WaitingListPageContainer = () => {
  const products = useSelector((state) => state.productlist.products);
  const [category, setCategory] = useState(products);
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true)
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

  useEffect(() => {
    getTableOrder()
      .then((res) => {
        setTables(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loading]);

  return <WaitingListPage handleClickCategory={handleClickCategory} tables={tables} />;
};

export default WaitingListPageContainer;
