// Aula 04 - useEffect
/*
Manipulação do estado
*/

import { useState } from "react";

import Formulario from "./Formulario";
import Perfil from "./Perfil";


const Aula4 = ({nome, github}) => {
  const [formularioVisivel, setFormularioVisivel] = useState(true)

  return (<>
    <Perfil nome={nome} github={github} />
    {formularioVisivel && (<Formulario nome={nome} />)}
    <br/><button type="button" onClick={() => setFormularioVisivel(!formularioVisivel)}>toggle formulário</button>
  </>);
};

export default Aula4;
