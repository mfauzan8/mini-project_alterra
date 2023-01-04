import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, client, getCarts } from "../api";
import { setProducts } from "../Features/productReducer";
import { toast } from "react-toastify"
import AllProductPage from "../Components/AllProductPage";
import { setCarts } from "../Features/cartReducer";

const AllProductPageContainer = () => {
  const products = useSelector((state) => state.productlist.products);
  const carts = useSelector((state) => state.cartlist.carts);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(products);
  const [order, setOrder] = useState(carts);
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
      let productFilter = products.filter((object) => object.categories.name_categories === e);
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
        quantity: findData.quantity + 1,
        subtotal: value.price * (findData.quantity + 1),
        tax: value.price * (findData.quantity + 1) * 0.1,
        total: (value.price * (findData.quantity + 1) * 0.1)
          + (value.price * (findData.quantity + 1))
      }

      await client.put(`${findData.id}`, updateCart)
        .then((res) => {
          const findNewData = order.map((i) => i.id === res.data.update_nafa_resto_cart.returning[0].id ? res.data.update_nafa_resto_cart.returning[0] : i)
          toast.info('success update product quantity', {
            position: "top-center",
            autoClose: 3000,
          })
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
          toast.success('success add product to cart', {
            position: "top-center",
            autoClose: 3000,
          })
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
    const idProduct = value.id
    await client.delete(`${idProduct}`)
    const deleteItem = order.filter((item) => item.id !== idProduct)
    toast.success('success delete product', {
      autoClose: 3000,
    })
    setOrder(deleteItem)
  }

  const handleBtnPlus = async (value) => {
    const updateCart = {
      quantity: value.quantity + 1,
      subtotal: value.subtotal + value.product[0].price,
      tax: value.tax / value.quantity * (value.quantity + 1),
      total: value.total / value.quantity * (value.quantity + 1)
    }
    await client.put(`${value.id}`, updateCart)
      .then((res) => {
        const findNewData = order.map((item) => item.id === res.data.update_nafa_resto_cart.returning[0].id ? res.data.update_nafa_resto_cart.returning[0] : item)
        setOrder(findNewData)
        toast.success('success update quantity', {
          autoClose: 3000,
        })
      }
      )
  }

  const handleBtnMinus = async (value) => {
    const updateCart = {
      quantity: value.quantity - 1,
      subtotal: value.subtotal - value.product[0].price,
      tax: value.tax / value.quantity * (value.quantity - 1),
      total: value.total / value.quantity * (value.quantity - 1)
    }
    if (value.quantity > 1) {
      await client.put(`${value.id}`, updateCart)
        .then((res) => {
          const findNewData = order.map((item) => item.id === res.data.update_nafa_resto_cart.returning[0].id ? res.data.update_nafa_resto_cart.returning[0] : item)
          setOrder(findNewData)
        }
        )
    } else {
      await client.delete(`${value.id}`)
      const deleteItem = order.filter((item) => item.id !== value.id)
      setOrder(deleteItem)
    }
  }

  useEffect(() => {
    getCarts()
      .then((res) => {
        dispatch(setCarts(res));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loading]);

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
    handleBtnPlus={handleBtnPlus}
    handleBtnMinus={handleBtnMinus}
  />;
};

export default AllProductPageContainer;
