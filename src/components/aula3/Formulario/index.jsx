import { useState } from "react";

const Formulario = ({ nome }) => {
  const [notaA, setNotaA] = useState(0);
  const [notaB, setNotaB] = useState(0);
  const [notaC, setNotaC] = useState(0);

  const calculaMedia = () => {
    /*
        parseInt ou parseFloat são necessários por que o valor do input é uma string, e tem que
        converter para número para poder fazer a soma, senão irá concatenar o texto
    */
    return (
      (parseFloat(notaA) + parseFloat(notaB) + parseFloat(notaC)) /
      3
    ).toFixed(2);
  };

  const renderizarNota = () => {
    const media = calculaMedia();

    return (
      <p>
        Olá {nome}, sua média é {media}, você foi{" "}
        {media > 7 ? "aprovado" : "reprovado"}
      </p>
    );
  };

  const alteraNotaB = (event) => {
    setNotaB((notaAnterior) => {
        console.log('nota B anterior: ', notaAnterior)
        return event.target.value
    });
  };

  return (
    <form>
      <label htmlFor="notaA">Nota A: </label>
      <input
        type="number"
        id="notaA"
        name="notaA"
        onChange={({ target }) => setNotaA(target.value)}
      />
      <br />
      <label htmlFor="notaB">Nota B: </label>
      <input type="number" id="notaB" name="notaB" onChange={alteraNotaB} />
      <br />
      <label htmlFor="notaC">Nota C: </label>
      <input
        type="number"
        id="notaC"
        name="notaC"
        onChange={(e) => setNotaC(e.target.value)}
      />
      <br />
      {renderizarNota()}
    </form>
  );
};

export default Formulario;
