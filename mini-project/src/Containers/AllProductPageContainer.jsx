import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, client } from "../api";
import { setProducts } from "../Features/productReducer";
import AllProductPage from "../Components/AllProductPage";

const AllProductPageContainer = () => {
  const products = useSelector((state) => state.productlist.products);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(products);
  const [order, setOrder] = useState([]);
  const [searchProducts, setSearchWords] = useState("");


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

  const handleAddToCart = async (value) => {
    const productLocation = order.findIndex((item) => item.id_products === value.id_products);
    if (productLocation >= 0) {
      let findData = order.find(({ id_products }) => id_products === value.id_products);
      const updateCart = {
        id: order.id,
        id_products: findData.id_products,
        quantity: findData.quantity + 1,
        subtotal: value.price * (findData.quantity + 1),
        tax: value.price * (findData.quantity + 1) * 0.1,
        total: (value.price * (findData.quantity + 1) * 0.1)
          + (value.price * (findData.quantity + 1))
      }

      await client.put(`${findData.id_products}`, updateCart)
        .then((res) => {
          const findNewData = order.map((i) => i.id === res.data.update_nafa_resto_cart.returning[0].id ? res.data.update_nafa_resto_cart.returning[0] : i)
          setOrder(findNewData)
        }
        )
    } else {
      const newProduct = {
        id_products: value.id_products,
        quantity: 1,
        subtotal: value.price,
        tax: value.price * 0.1,
        total: value.price * 0.1 + value.price,
      };
      await client.post("/", newProduct)
        .then((res) => {
          setOrder((prevState) => [...prevState, res.data.insert_nafa_resto_cart.returning[0]])
        })
    }
  }

  useEffect(() => {
    const loweredSearchedWords = searchProducts.toLowerCase();
    const updatedProduct = [];
    if (searchProducts !== "") {
      products.forEach((product) => {
        const loweredProductName = product.name.toLowerCase();
        if (loweredProductName.includes(loweredSearchedWords)) {
          updatedProduct.push(product);
        }
      });
      setCategory(updatedProduct);
    } else {
      setCategory(products);
    }
  }, [products, searchProducts]);

  const deleteById = async (value) => {
    const idProduct = value[0].id
    await client.delete(`${idProduct}`)
    const deleteItem = order.filter((item) => item.id !== idProduct)
    setOrder(deleteItem)
  }

  return <AllProductPage
    loading={loading}
    handleClickCategory={handleClickCategory}
    category={category}
    handleAddToCart={handleAddToCart}
    order={order}
    setOrder={setOrder}
    searchProducts={searchProducts}
    setSearchWords={setSearchWords}
    deleteById={deleteById}
  />;
};

export default AllProductPageContainer;
