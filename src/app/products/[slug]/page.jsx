"use client";

import useFetch from "@/app/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./detail.module.scss";

export default function DetailProduct({ params }) {
  const { slug } = params;
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { data } = useFetch(
    "https://my-json-server.typicode.com/ariswj29/my-book/products"
  );

  useEffect(() => {
    const id = data?.find((product) => product.slug === slug).id;
    const fetchProduct = async () => {
      const response = await fetch(
        `https://my-json-server.typicode.com/ariswj29/my-book/products/${id}`
      );
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [data, slug]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={540}
        />
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.breadcrumb}>
          <Link href={"/"}>Home</Link>&nbsp; / &nbsp;
          <Link href={"/products"}>Products</Link>&nbsp; / &nbsp;
          <h6>{product.title}</h6>
        </div>
        <div className={styles.productInfo}>
          <h5 className={styles.category}>{product.category || "Category"}</h5>
          <h4 className={styles.title}>{product.title || "Loading..."}</h4>
          <h5 className={styles.price}>{product.price || ""}</h5>
          <p className={styles.p}>
            {Array.from({ length: Math.round(product.rating) }, (_, index) => (
              <span key={index}>⭐</span>
            ))}
            ({product.rating}/5)
          </p>
          <p className={styles.description}>{product.description || ""}</p>
        </div>
        <div className={styles.buttonGroup}>
          <button
            className={styles.readButton}
            onClick={() =>
              window.open(product.link || "https://www.google.co.id/", "_blank")
            }
          >
            Read Now
          </button>
          <button
            onClick={() => alert("Success add to cart")}
            className={styles.cartButton}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
