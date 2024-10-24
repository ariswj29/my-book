import styles from "@/app/page.module.scss";
import Image from "next/image";
import { CardProduct } from "../CardProduct";

export const Product = () => {
  return (
    <div className={styles.product}>
      <h2 className={styles.h2}>Products</h2>
      <div className={styles.productContainer}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
};
