import Image from "next/image";
import styles from "@/app/page.module.scss";
import Link from "next/link";

export const CardProduct = ({ product, key }) => {
  return (
    <div className={styles.productCard} key={key}>
      <Image
        className={styles.productImage}
        src={product.image}
        alt={product.title}
        width={400}
        height={540}
      />
      <div className={styles.productInfo}>
        <h5 className={styles.h5}>{product.category}</h5>
        <h4 className={styles.h4}>{product.title}</h4>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className={styles.p}>
            {Array.from({ length: Math.round(product.rating) }, (_, index) => (
              <span key={index}>⭐</span>
            ))}
            ({product.rating}/5)
          </p>
          <p className={styles.p}>{product.price}</p>
        </div>
        <Link className={styles.button} href={`/products/${product.slug}`}>
          Detail Product
        </Link>
      </div>
    </div>
  );
};
