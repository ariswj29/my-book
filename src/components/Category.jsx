"use client";
import styles from "./category.module.scss";
import Image from "next/image";
import { categories } from "@/data/data";

export const Category = () => {
  console.log(categories, "categories");
  return (
    <div className={styles.category}>
      {categories?.map((item, key) => (
        <div
          key={key}
          className={styles.categoryItem}
          onClick={() => alert(item.title)}
        >
          <Image src={item.image} alt={item.title} width={100} height={100} />
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
};
