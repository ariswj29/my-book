import styles from "@/app/page.module.scss";
import { CardProduct } from "../CardProduct";
import Link from "next/link";
import { products } from "@/data/data";

export const Product = () => {
  return (
    <div className={styles.product}>
      <h2 className={styles.h2}>Products</h2>
      <div className={styles.productContainer}>
        {products?.map((product, key) => (
          <CardProduct key={key} product={product} />
        ))}
      </div>
      <Link className={styles.productButton} href="/products">
        View All Products
      </Link>
    </div>
  );
};
