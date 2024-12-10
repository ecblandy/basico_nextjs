"use client";

import styles from "../../page.module.css";
import { useParams } from "next/navigation";

const Products = () => {
  // Retorna um json com o ID por causa do [id]
  const params = useParams();
  console.log(params);
  return (
    <>
      <div className={styles.page}>
        <h1>Detalhes do produto #{params.id}</h1>
      </div>
    </>
  );
};
export default Products;
