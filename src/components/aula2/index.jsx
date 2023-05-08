// Aula 02 - Objetivo é componentizar o código
/*
Se o arquivo de importação chama index.(jsx, tsx, js, ts) não precisa colocar o nome do arquivo no import
Podemos importar componentes externos

Flow
1. Importação
2. Código do componente
*/1

// import de objeto e objeto com alias
import { PI as PIAlias, GMT_BRASIL } from "./test";

// O nome da variável não precisa ser o mesmo nome do componente por que ele é exportado como default
import nomesExterno from "./nomes";

// import Perfil from './Perfil/Perfil';
import { Perfil, componentPerfil } from "./Perfil/";

const Aula2 = () => {
  return (
    <>
      <h1> PI: {PIAlias} </h1>
      <h2> GMT_BRASIL: {GMT_BRASIL} </h2>
      <h3> Nomes Externos: {nomesExterno.join(", ")} </h3>
      <h4> Total de nomes: {nomesExterno.length} </h4>
      <h5> Variavel do Perfil: {componentPerfil ? "true" : "false"} </h5>
      <br />
      <br />
      <Perfil />
    </>
  );
};

export default Aula2;
