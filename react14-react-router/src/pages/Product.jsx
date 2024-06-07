import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Product() {
  const params = useParams();
  // const [product, setProduct] = useState({});
  const [data, error, loading] = useFetch(
    `https://dummyjson.com/products/${params.id}`
  );

  // useEffect(() => {
  //   const run = async () => {
  //     const res = await axios.get(
  //       `https://dummyjson.com/products/${params.id}`
  //     );
  //     setProduct(res.data);
  //   };
  //   run();
  // }, [params.id]);

  return (
    <>
      {console.log("Loading-Error : ", loading, error)}
      {loading && <h1>Loading...</h1>}
      {!!error && <h1>{error.message}</h1>}
      {!loading && !error && (
        <>
          <div>Product {params.id}</div>
          <h3>{JSON.stringify(data)}</h3>
        </>
      )}
    </>
  );
}

export default Product;

// แก้ไข code หน้า Product
// 1. ให้ใช้ useFetch (แทนการใช้ useEffect...)
// 2. ให้มี loading + error
// 3. ให้แสดงกรณี loading และ error โดยไม่ต้องใช้ if
// ให้เวลาถึง 13:20
