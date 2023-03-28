import MediaQuery from 'react-responsive';

// Styles
import './styles.scss';
import { GiHamburgerMenu } from 'react-icons/gi';

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
        <a href="/">Home</a>
        <a href="#competence">Compétences</a>
        <a href="#realisation">Réalisations</a>
        <a href="#CV">C.V.</a>
      </div>
    </div>
  );

  const mobileNav = () => (
    <div className="mobile-dropdown">
      <GiHamburgerMenu
        className="mobile-dropdown-icon"
        onClick={handleDropdown}
      />

      <ul className="mobile-nav-links closed" id="mobile-nav-links">
        <a href="/">Home</a>
        <a href="#competence">Compétences</a>
        <a href="#realisation">Réalisations</a>
        <a href="#CV">C.V.</a>
      </ul>
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
        {mobileNav()}
      </MediaQuery>

      {/* Small screens */}
      <MediaQuery minWidth={769}>
        {desktopNav()}
      </MediaQuery>
    </div>
  );
}

export default Header;
