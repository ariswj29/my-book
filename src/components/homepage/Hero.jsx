import Image from "next/image";
import styles from "@/app/page.module.scss";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        className={styles.heroImage}
        src="/hero.png"
        alt="Hero"
        width={1000}
        height={1000}
      />
    </div>
  );
};
