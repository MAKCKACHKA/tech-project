// import { useState } from "react";
import Filter from "../components/Filter/Filter";
import Products from "../components/Product List/Products";

// import "../styles/main.css";

export default function Catalog() {
  // const [isMobile, setisMobile] = useState(false);

  return (
    <>
      <h1 className="main-title">Каталог</h1>
      <section className="portfolio-section">
        <Filter />
        <Products />
      </section>
    </>
  );
}
