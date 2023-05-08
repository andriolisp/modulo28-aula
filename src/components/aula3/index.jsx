// Aula 03 - Estados e Eventos
/*
Uso de propriedades e eventos dentro de componentes
*/

import Formulario from "./Formulario";
import Perfil from "./Perfil";

const Aula3 = ({nome, github}) => {
  return <>
    <Perfil nome={nome} github={github} />
    <Formulario nome={nome} />
  </>;
};

export default Aula3;
