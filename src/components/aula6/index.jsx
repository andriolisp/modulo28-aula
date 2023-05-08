// Aula 04 - useEffect
/*
Manipulação do estado
*/

import { useState } from "react";

import Perfil from "./Perfil";
import RepoList from "./RepoList";

const Aula3 = () => {
  const [github, setGithub] = useState("andriolisp");
  return (
    <>
      <input type="text" onBlur={({ target }) => setGithub(target.value)} />
      {github.length > 4 && (
      <>
        <Perfil github={github} />
        <RepoList github={github} />
      </>
      )}
    </>
  );
};

export default Aula3;
