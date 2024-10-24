import Image from "next/image";
import styles from "@/app/page.module.scss";

export const CardProduct = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <Image
        className={styles.productImage}
        src="/hero.png"
        alt="Product"
        width={400}
        height={200}
      />
      <h3 className={styles.h3}>Product 1</h3>
      <p className={styles.p}>Price: $100</p>
    </div>
  );
};
