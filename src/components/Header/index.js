import './styles.scss';

function Header() {
  return (
    <div className="header">
      <div className="navlink">
        <a href="/">Home</a>
        <a href="#competence">Compétences</a>
        <a href="#realisation">Réalisations</a>
        <a href="/">C.V.</a>
      </div>
    </div>
  );
}

export default Header;
