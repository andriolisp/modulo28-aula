// Aula 01 - Objetivo é entender a configuração do vite + JSX + Funções Básicas
/*
Babel é um compilador JavaScript gratuito e de código aberto e um conjunto de ferramentas que ajuda a traduzir o código para o navegador.
Webpack é construtor, ajuda a agrupar todas as dependências to projeto em arquivos para casos específicos. (JS, CSS, Imagens, etc)
Vite será usado no exercício (Vite significe "rapido" em francês)
eg. npm init vite@latest

React
    - React DOM (Frontend - Web)
    - React Native (Frontend - Mobile)

*/

const Aula1 = () => {
  const nome = "Carlos";

  const retornaNome = () => {
    return nome;
  };

  const pessoa = {
    nome: "Carlos",
  };

  const estaDeDia = true;

  return (
    <>
      <h1>Olá com função {retornaNome()}</h1>
      <h2>Olá com a propriedade {pessoa.nome}</h2>
      <h3>Olá com a variável {nome}</h3>
      <h4>Olá estático Carlos</h4>
      <h5>Olá com operador ternário estaDeDia {estaDeDia ? "Sim" : "Não"}</h5>
      <h6>Olá com ternário estaDeDia positivo {estaDeDia && "Bom Dia"} </h6>
    </>
  );
};

export default Aula1;
