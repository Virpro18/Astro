import styles from "../../styles/projects_header.module.css"
interface props {
  title: string;
}
import Arrow from "../../../public/arrow-back.svg"
const arrow  = "<~~"

export default function ProjectHeader(props:props) {
  return (
    <header className={styles.header}>
      
      <a href="/"><button className={styles['header-back']}>{arrow}Back</button></a>
      <h1>{props.title}</h1>
      <nav className={styles.features_nav}>
        <button>Create</button>
        {/* <button>terus</button> */}
        <button>AI</button>
      </nav>
    </header>
  );
}

