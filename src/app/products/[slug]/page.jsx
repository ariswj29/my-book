"use client";

import Image from "next/image";
import Link from "next/link";

export default function DetailProduct({ product }) {
  console.log(product, "product");
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        paddingLeft: "10rem",
        paddingRight: "10rem",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/products/spiderman.jpeg"
          alt="{product.title}"
          width={400}
          height={540}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          className="partAtas"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Link
            href={"/"}
            style={{ fontSize: "1.5rem", textDecoration: "underline" }}
          >
            Home
          </Link>
          &nbsp; / &nbsp;
          <Link
            href={"/products"}
            style={{ fontSize: "1.5rem", textDecoration: "underline" }}
          >
            Products
          </Link>
          &nbsp; / &nbsp;
          <h6 style={{ fontSize: "1.5rem" }}>Spiderman</h6>
        </div>
        <div className="partTengah" style={{ display: "grid", gap: "1rem" }}>
          <h5
            style={{
              backgroundColor: "aquamarine",
              borderRadius: "10px",
              alignContent: "center",
              width: "100px",
              textAlign: "center",
            }}
          >
            Fantasy
          </h5>
          <h4 style={{ fontSize: "2rem" }}>Spdierman</h4>
          <h5 style={{ fontSize: "1.5rem" }}>Rp. 35.000</h5>
          <p> ⭐⭐⭐⭐ (4/5)</p>
          <p>
            The Spectacular Spider man is a comic book series that was published
            by Marvel Comics. The series was a spin-off of the long-running
            series The Amazing Spider. Collects Spectacular Spider-Man (1976)
            #1-15. In 1976, Spidey notched his second solo series under the
            direction of Gerry Conway and Sal Buscema. With his first
            live-action series on the horizon, the world wanted to know just who
            this Peter Parker guy was. Spectacular not only expanded
            opportunities for web-slinging wonder, but it also provided a
            platform to expand upon and explore the world of Spidey{`'`}s
            incomparable cast - J. Jonah Jameson, Mary Jane Watson, Flash
            Thompson and more! Of course, there was no shortage of villains -
            including the Vulture and Morbius - or iconic guest stars, ranging
            from the White Tiger to the Inhumans!
          </p>
        </div>
        <div className="partBawah" style={{ display: "grid", gap: "1rem" }}>
          <button
            style={{
              backgroundColor: "aquamarine",
              borderRadius: "10px",
              height: "50px",
              cursor: "pointer",
            }}
            onClick={() =>
              window.open(
                "https://www.google.co.id/books/edition/Spectacular_Spider_Man_Masterworks_Vol_1/-fHWDgAAQBAJ?hl=id&gbpv=1",
                "_blank"
              )
            }
          >
            Read Now
          </button>
          <button
            onClick={() => alert("Success add to cart")}
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              borderRadius: "10px",
              height: "50px",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
