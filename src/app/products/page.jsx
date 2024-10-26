"use client";

import { CardProduct } from "@/components/CardProduct";
import styles from "./products.module.scss";
import { Category } from "@/components/Category";
import useFetch from "@/app/hooks/useFetch";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const { data, loading, error } = useFetch(
    "https://my-json-server.typicode.com/ariswj29/my-book/products"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error... {error.message}</p>;

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await fetch(
  //       "https://my-json-server.typicode.com/ariswj29/my-book/products"
  //     );
  //     const data = await response.json();
  //     setData(data);
  //     return data;
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div className={styles.product}>
      <h2>Products</h2>
      <h3>Category</h3>
      <Category />
      <div className={styles.productToolbar}>
        <div className={styles.productSearch}>
          <input type="text" placeholder="Search Product" />
          <button>Search</button>
        </div>
        <div className={styles.productFilter}>
          <select>
            <option value="" selected disabled>
              Select Category
            </option>
            <option value="">All Categories</option>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
          </select>
        </div>
      </div>
      <div className={styles.productContainer}>
        {data.map((product, key) => (
          <CardProduct key={key} product={product} />
        ))}
      </div>
    </div>
  );
}
