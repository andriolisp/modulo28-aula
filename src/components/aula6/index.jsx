// Aula 06 - CSS Modules

import { useState } from "react";

import Perfil from "./Perfil";
import RepoList from "./RepoList";

const Aula6 = () => {
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

export default Aula6;
