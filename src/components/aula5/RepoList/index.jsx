import { useState, useEffect } from "react";

const RepoList = ({ github }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${github}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setEstaCarregando(false);
          setRepos(data);
        }, 3000)
      });
  }, [github]);

  return (
    <>
      <h2>Repositórios do {github}</h2>
      {estaCarregando && <h3>Carregando...</h3>}
      <ul>
        {repos.map(({id, html_url, name, language}) => (
          <li key={id}>
            <b>Nome: </b>
                <a href={html_url} target="_blank">{name}</a>
            <br />
            <b>Linguagem: </b>
            {language}
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoList;
