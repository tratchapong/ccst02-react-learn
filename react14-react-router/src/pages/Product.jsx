import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Product() {
  const params = useParams();
  console.log(params);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const run = async () => {
      const res = await axios.get(
        `https://dummyjson.com/products/${params.id}`
      );
      setProduct(res.data);
    };
    run();
  }, [params.id]);

  return (
    <>
      <div>Product {params.id}</div>
      <h3>{JSON.stringify(product)}</h3>
    </>
  );
}

export default Product;
