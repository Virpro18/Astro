import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/AiCard.module.css";
import type { FormEvent } from "react";
import { Light as SyntaxHiglight } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
function AiCard(props) {
  const [response, setResponse] = useState("");
  async function fetchData(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);

      const fetchData = await fetch("/api/AiAPI", {
        method: "POST",
        body: formData,
      });
      const datas = await fetchData.json();
      console.log(datas);
      setResponse(datas.response);
      console.log(datas.message.response);
      setResponse(datas.message.response);
    } catch {
      console.log("error");
    }
  }

  function backClose(e) {
    // console.log(e.target.dataset.close);
    e.target.dataset.close ? props.test() : ""; // Akses elemen dan properti ID
  }

  return (
    <div className={styles.AiCard} data-close onClick={backClose}>
      <div className={styles.cardWrapper}>
        <div className={styles.close}>
          <button className={styles.closeButton} data-close>
            X
          </button>
        </div>
        <div className={styles.cardHeader}>
          <h1>Ai</h1>
          <h3>Sub Ai</h3>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.aiRespond}>
            <SyntaxHiglight language="swift" style={darcula}>
              {response}
            </SyntaxHiglight>
          </div>
          <form onSubmit={fetchData}>
            <input
              type="text"
              name="prompt"
              id="prompt"
              autoComplete="additional-name"
              required
            />
          </form>
        </div>
        {/* <button onClick={fetchData}>test</button> */}
      </div>
    </div>
  );
}

export default AiCard;
