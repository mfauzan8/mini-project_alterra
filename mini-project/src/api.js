import axios from "axios";

export const client = axios.create({
  baseURL: "https://valid-pheasant-86.hasura.app/api/rest/nafa",
  headers: {
    "x-hasura-admin-secret": "hPG4LHAScSbz2EtThbxU646IlBEEa89PU0C5F64M7lgibO6xzJp13uHdZbimAv7a",
  },
});

export const getProducts = async () => {
  const response = await client.get("/");
  return response.data.nafa_resto_products;
};

export const getCategory = async () => {
  const response = await client.get("/");
  return response.data.nafa_resto_categories;
};

export const getCarts = async () => {
  const response = await client.get("/cart");
  return response.data.nafa_resto_cart;
};

export const getTableOrder = async () => {
  const response = await client.get("/table");
  return response.data.nafa_resto_table;
};
