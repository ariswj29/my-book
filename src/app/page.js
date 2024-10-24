import Image from "next/image";
import { Hero } from "@/components/homepage/Hero";
import { Slider } from "@/components/homepage/Slider";
import { Product } from "@/components/homepage/Product";

export default function Home() {
  return (
    <div>
      <Hero />
      <Slider />
      <Product />
    </div>
  );
}
