import { CardProduct } from "@/components/CardProduct";
import styles from "./products.module.scss";
import { Category } from "@/components/Category";
import { products } from "@/data/data";

export default function ProductsPage() {
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
        {products.map((product, key) => (
          <CardProduct key={key} product={product} />
        ))}
      </div>
    </div>
  );
}
