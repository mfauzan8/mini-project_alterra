import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../api";
import { setProducts } from "../Features/productReducer";
import { getCarts } from "../api";
import { setCarts } from "../Features/cartReducer";
import AllProductPage from "../Components/AllProductPage";

const AllProductPageContainer = () => {
  const products = useSelector((state) => state.productlist.products);
  const carts = useSelector((state) => state.cartlist.carts);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(products);

  useEffect(() => {
    getProducts()
      .then((res) => {
        dispatch(setProducts(res));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loading]);

  const handleClickCategory = (e) => {
    if (e !== "All") {
      let productFilter = products.filter((object) => object.id_categories === +e);
      setCategory(productFilter);
    } else {
      setCategory(products);
    }
  };

  return <AllProductPage loading={loading} handleClickCategory={handleClickCategory} category={category} />;
};

export default AllProductPageContainer;
