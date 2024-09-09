import styles from "../../styles/projects_header.module.css";
import AiCard from "./AiCard.jsx";
// import { main } from "../../Ai/Groq";
// main()
import React, { useState, useEffect } from "react";

interface Props {
  title: string;
}

const arrow = "<~~";

function ProjectHeader({ title }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      console.log("Open");
    } else {
      console.log("Close");
    }
  };


  return (
    <>
      <header className={styles.header}>
        <div className={styles.responsiveWrapper}>
        <a href="/">
          <button className={styles["header-back"]}>{arrow}Back</button>
        </a>
        <h1>{title}</h1>
        </div>
        <nav className={styles.features_nav}>
          <button>Select</button>
          <button>Create</button>
          <button onClick={handleClick}>AI</button>
        </nav>
      </header>
     {isOpen? <AiCard test={handleClick}/>: ""}
    </>
  );
}

export default ProjectHeader;
