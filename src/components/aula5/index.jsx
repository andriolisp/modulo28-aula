// Aula 05 - Renderizando Listas
/*
Manipulação do estado
*/

import Perfil from "./Perfil";
import RepoList from "./RepoList";


const Aula5 = ({nome, github}) => {
  return (<>
    <Perfil nome={nome} github={github} />
    <RepoList github={github} />
  </>);
};

export default Aula5;
