import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/AiCard.module.css";

function AiCard(props) {
  const wrap = useRef(null);
  // console.log(wrap)
  // const [IsOpen, setIsOpen] = useState(props.close);
  async function fetchData() {
    if (wrap.current) {
      console.log("Elemen yang diambil dengan ref:", wrap.current.id); // Akses elemen dan properti ID
    }

    // props.test("test");
    try {
      const fetchData = await fetch("/api/3.json");
      const datas = await fetchData.json();
      console.log(datas);
    } catch {
      console.log("error");
    }
  }

  // function handleClick(e) {
  //   e.stopPropagation();
  // }
  function backClose(e) {
    console.log(e.target.dataset.close);
    e.target.dataset.close ? props.test() : ""; // Akses elemen dan properti ID
  }

  return (
    <div className={styles.AiCard} ref={wrap} data-close onClick={backClose}>
      <div className={styles.cardWrapper}>
        <button className={styles.close} data-close>X</button>
        <div className={styles.cardHeader}>
          <h1>Ai</h1>
          <br />
          <h3>Sub Ai</h3>
        </div>
        <button onClick={fetchData}>test</button>
      </div>
    </div>
  );
}

export default AiCard;
