import styles from "../../styles/projects_header.module.css"
interface props {
  title: string;
}

export default function ProjectHeader(props:props) {
  return (
    <header className={styles.header}>
      <button>Back</button>
      <h1>{props.title}</h1>
    </header>
  );
}

