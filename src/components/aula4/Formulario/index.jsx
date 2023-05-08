import { useState, useEffect } from "react";
//Hooks no React

const Formulario = ({ nome }) => {
  const [notaA, setNotaA] = useState(0);
  const [notaB, setNotaB] = useState(0);
  const [notaC, setNotaC] = useState(0);

  useEffect(() => {
    console.log(`O componente foi montado`);

    return () => {
      console.log(`O componente foi desmontado`);
    }
  }, []);

  useEffect(() => {
    console.log(`O estado mudou para a nota A ou B`);
  }, [notaA, notaB]);

  useEffect(() => {
    console.log(`O estado mudou para a nota C`);
  }, [notaC]);

  const calculaMedia = () => {
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
    setNotaB(event.target.value);
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
