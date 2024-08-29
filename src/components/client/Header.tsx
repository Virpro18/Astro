import styles from "../../styles/header.module.css";
import { memo, useMemo } from "react";

interface HeaderProps {
  link: string[];
  title?: string[];
  currentLink: string;
}

const Header: React.FC<HeaderProps> = ({ link, title, currentLink }) => {
  const renderNavigation = useMemo(() => {
    return link.map((item, index) => {
      const isCurrentLink = item === currentLink;
      const itemClassName = `${isCurrentLink ? styles.here : ""} ${
        styles.link
      }`;

      return (
        <li key={index} className={styles.lint}>
          <a href={item} className={itemClassName}>
            {title[index]}
          </a>
        </li>
      );
    });
  }, [link, title, currentLink]);

  const genTitle = () => {
    return link.map((item, index) => {
      return item === currentLink ? title[index] : "";
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <a href="">
          <img src="" alt="" />
        </a>
        <label htmlFor="">name</label>
      </div>
      <h1>{genTitle()}</h1>
      <nav>
        <ul className={styles.uint}>{renderNavigation}</ul>
      </nav>
    </header>
  );
};

export default memo(Header);
