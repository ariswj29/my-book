"use client";
import styles from "@/app/page.module.scss";
import { CardProduct } from "../CardProduct";
import Link from "next/link";
import useFetch from "@/app/hooks/useFetch";
import { useEffect, useState } from "react";

export const Product = () => {
  const { data, loading, error } = useFetch(
    "https://my-json-server.typicode.com/ariswj29/my-book/products"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error... {error.message}</p>;

  const limitedProducts = data?.slice(0, 4);

  return (
    <div className={styles.product}>
      <h2 className={styles.h2}>Products</h2>
      <div className={styles.productContainer}>
        {limitedProducts?.map((product, key) => (
          <CardProduct key={key} product={product} />
        ))}
      </div>
      <Link className={styles.productButton} href="/products">
        View All Products
      </Link>
    </div>
  );
};
