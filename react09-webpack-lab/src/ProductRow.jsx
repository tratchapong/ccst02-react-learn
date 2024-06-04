import React from "react";

export default function ProductRow({ product }) {
  // const name = product.stocked ? (
  //   product.name
  // ) : (
  //   <span style={{ color: "red" }}>{product.name}</span>
  // );

  const name = <span style={{ color: !product.stocked ? 'red': ''}}>{product.name}</span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
