import styles from './Perfil.module.css'

const Perfil = ({ github }) => {
  return (
    <header className={styles.header}>
      <img
        className={styles.avatar}
        src={`https://github.com/${github}.png`}
        alt="Foto de perfil"
      />
      <h1 className={styles.name}>{github}</h1>
    </header>
  );
};

export default Perfil;
