// Dentro dos components HTML quando usar um objeto javascript, não é necessário colocar entre aspas,
// e pode usar as chaves para acessar o objeto

import "./perfil.css";

const componentPerfil = false;

const Perfil = () => {
  const usuario = {
    nome: "Carlos",
    avatar: "https://github.com/andriolisp.png",
  };

  return (
    <div>
      {/* <img class="perfil-avatar" src={usuario.avatar} alt="Foto de perfil" /> */}
      <img
        className="perfil-avatar"
        src={usuario.avatar}
        alt="Foto de perfil"
      />

      {/* <img src="{usuario.avatar}" alt="Foto de perfil" /> */}
      <h3 className="perfil-titulo">{usuario.nome}</h3>
    </div>
  );
};

// export default Perfil;
export { Perfil, componentPerfil };
