import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

export default function ProductTable({ products, filterText, inStockOnly }) {
  // const rows = [];
  // let lastCategory = null;

  // products.forEach((product) => {
  //   if (
  //     product.name.toLowerCase().indexOf(
  //       filterText.toLowerCase()
  //     ) === -1
  //   ) {
  //     return;
  //   }

  //   if (inStockOnly && !product.stocked) {
  //     return;
  //   }

  //   if (product.category !== lastCategory) {
  //     rows.push(
  //       <ProductCategoryRow
  //         category={product.category}
  //         key={product.category} />
  //     );
  //   }
  //   rows.push(
  //     <ProductRow
  //       product={product}
  //       key={product.name} />
  //   );
  //   lastCategory = product.category;
  // });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {/* { products.map( el => JSON.stringify(el)) } */}
        {
           products.filter( el=> el.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1  && 
                          ( (inStockOnly && el.stocked) || !inStockOnly ))
                   .reduce( (a,c) => {
                      if(a.lastCategory !== c.category) {
                        a.rows = [ ...a.rows, <ProductCategoryRow category={c.category} key={c.category} /> ]
                        a.lastCategory = c.category
                      }
                      a.rows = [ ...a.rows, <ProductRow product={c} key={c.name} /> ]
                      return a
                   }, {lastCategory: null, rows: []} ).rows
        }
      </tbody>
    </table>
  );
}

/*
 1 [<ProductCategoryRow category="Fruits" />, <ProductRow product="Apple" />, //lastCategory = "Fruits"
 2  <ProductRow product="Dragonfruit" />, //lastCategory = "Fruits"
 3  <ProductRow product="Passionfruit" />, //lastCategory = "Fruits"
 4  <ProductCategoryRow category="Vegetables" />,  <ProductRow product="Spinach" /> //lastCategory = "Vegetables"
 5  <ProductRow product="Pumpkin" />,  //lastCategory = "Vegetables"
 6  <ProductRow product="Peas" />
 ]
*/
