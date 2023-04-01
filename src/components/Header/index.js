import MediaQuery from 'react-responsive';

// Styles
import './styles.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-scroll';

function Header() {
  // MOBILE
  const handleDropdown = () => {
    const dropdownMenu = document.getElementById('mobile-nav-links');

    if (dropdownMenu.classList.contains('closed')) {
      dropdownMenu.classList.remove('closed');
      dropdownMenu.classList.add('open');
    }
    else {
      dropdownMenu.classList.remove('open');
      dropdownMenu.classList.add('closed');
    }
  };

  const desktopNav = () => (
    <div className="header">
      <div className="navlink">
        <Link activeClass="active" to="home" spy smooth offset={-250} duration={500}>Home</Link>
        <Link activeClass="active" to="competence" spy smooth offset={-250} duration={500}>Compétences</Link>
        <Link activeClass="active" to="realisation" spy smooth offset={-175} duration={500}>Réalisations</Link>
        <Link activeClass="active" to="CV" spy smooth offset={-150} duration={500}>C.V.</Link>
      </div>
    </div>
  );

  const mobileNav = () => (
    <div className="header">
      <div className="mobile-dropdown">
        <GiHamburgerMenu
          className="mobile-dropdown-icon"
          onClick={handleDropdown}
        />

        <ul className="mobile-nav-links closed" id="mobile-nav-links">
          <Link activeClass="active" to="home" spy smooth offset={-250} duration={500} onClick={handleDropdown}>Home</Link>
          <Link activeClass="active" to="competence" spy smooth offset={-250} duration={500} onClick={handleDropdown}>Compétences</Link>
          <Link activeClass="active" to="realisation" spy smooth offset={-175} duration={500} onClick={handleDropdown}>Réalisations</Link>
          <Link activeClass="active" to="CV" spy smooth offset={-150} duration={500} onClick={handleDropdown}>C.V.</Link>
        </ul>
      </div>
    </div>

  );

  return (
    <div className="Navbar">
      {/* Mobile */}
      <MediaQuery minWidth={320} maxWidth={480}>
        {mobileNav()}
      </MediaQuery>

      {/* Tablets */}
      <MediaQuery minWidth={481} maxWidth={768}>
        {desktopNav()}
      </MediaQuery>

      {/* Small screens */}
      <MediaQuery minWidth={769}>
        {desktopNav()}
      </MediaQuery>
    </div>
  );
}

export default Header;
