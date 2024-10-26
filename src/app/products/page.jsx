"use client";

import { CardProduct } from "@/components/CardProduct";
import styles from "./products.module.scss";
import { Category } from "@/components/Category";
import useFetch from "@/app/hooks/useFetch";
import { useState } from "react";

export default function ProductsPage() {
  const { data, loading, error } = useFetch(
    "https://my-json-server.typicode.com/ariswj29/my-book/products"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error... {error.message}</p>;

  // Filter products based on the search term and selected category
  const filteredProducts = data.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.product}>
      <h2>Products</h2>
      <h3>Category</h3>
      <Category onCategorySelect={setSelectedCategory} />
      <div className={styles.productToolbar}>
        <div className={styles.productSearch}>
          <input
            type="text"
            placeholder="Search Product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => setSearchTerm(searchTerm)}>Search</button>
        </div>
      </div>
      <div className={styles.productContainer}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, key) => (
            <CardProduct key={key} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
