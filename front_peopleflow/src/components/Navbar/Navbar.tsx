"use client";
import GooeyNav from "../GooeyNav/GooeyNav";
import styles from "./Navbar.module.css";

const Navbar = () => {
  // Itens do menu
  const items = [
    { label: "Home", href: "#Home" },
    { label: "About", href: "#About" },
    { label: "Contact", href: "#Contact" }
  ];

  // Renderiza o GooeyNav com os itens
  return (
    <div className={styles.navbarWrapper}>
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 4, 5, 1, 4]}
      />
    </div>
  );
};

export default Navbar;
