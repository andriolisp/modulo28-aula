// Dentro dos components HTML quando usar um objeto javascript, não é necessário colocar entre aspas,
// e pode usar as chaves para acessar o objeto

import "./perfil.css";

const Perfil = ({ nome, github }) => {
    // const Perfil = (props) => {
//   const {nome, github}  = props;

  return (
    <div>
      {/* <h1>Props</h1>
      <h2>{JSON.stringify(props)}</h2> */}

      <img
        className="perfil-avatar"
        src={`https://github.com/${github}.png`}
        alt="Foto de perfil"
      />

      {/* <h3 className="perfil-titulo">{props.nome}</h3> */}
      <h3 className="perfil-titulo">{nome}</h3>
      <h4 className="perfil-titulo">{github}</h4>
    </div>
  );
};

export default Perfil;
// export { Perfil };
