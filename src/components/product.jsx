import React, { useState } from "react";
import { Link } from "react-router-dom";
const Product = () => {
  const [allProducts, setAllProducts] = useState([
    {
      id: 1,
      productName: "React Js",
    },
    {
      id: 2,
      productName: "Angular Js",
    },
    {
      id: 3,
      productName: "Vue Js",
    },
    {
      id: 4,
      productName: "Node Js",
    },
  ]);
  return (
    <>
      <h1>Product Course</h1>
      <ul>
        {allProducts.map((data) => {
          return (
            <li key={data.id}>
              <Link to={`/course/${data.id}`}>{data.productName}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Product;
