import { useState, useEffect } from "react";
import styles from "./RepoList.module.css";

const RepoList = ({ github }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);

  useEffect(() => {
    setEstaCarregando(true);
    fetch(`https://api.github.com/users/${github}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setEstaCarregando(false);
          setRepos(data);
        }, 3000);
      });
  }, [github]);

  return (
    <div className="container">
      {estaCarregando ? (
        <h3>Carregando...</h3>
      ) : (
        <ul className={styles.list}>
          {repos.map(({ id, html_url, name, language }) => (
            <li className={styles.listItem} key={id}>
              <div className={styles.itemName}>
                <b>Nome: </b>
                {name}
              </div>
              <div className={styles.itemLanguage}>
                <b>Linguagem: </b>
                {language}
              </div>
              <a href={html_url} className={styles.itemLink} target="_blank">
                GitHub
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepoList;
