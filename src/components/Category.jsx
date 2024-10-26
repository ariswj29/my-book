"use client";
import styles from "./category.module.scss";
import Image from "next/image";
import useFetch from "@/app/hooks/useFetch";

export const Category = ({ onCategorySelect }) => {
  const {
    data: categories,
    loading,
    error,
  } = useFetch(
    "https://my-json-server.typicode.com/ariswj29/my-book/categories"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error... {error.message}</p>;

  return (
    <div className={styles.category}>
      {categories?.map((item, key) => (
        <div
          key={key}
          className={styles.categoryItem}
          onClick={() => onCategorySelect(item.title)}
        >
          <Image src={item.image} alt={item.title} width={100} height={100} />
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
};
