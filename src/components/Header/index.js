import './styles.scss';

function Header() {
  return (
    <div className="header">
      <div className="navlink">
        <a href="/">Home</a>
        <a href="#competence">Compétences</a>
        <a href="/">Réalisations</a>
        <a href="/">Contact</a>
      </div>
    </div>
  );
}

export default Header;
