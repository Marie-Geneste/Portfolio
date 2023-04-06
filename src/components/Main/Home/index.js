import { useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import useDeviceOrientation from 'react-device-orientation-hook';
import { useMediaQuery } from 'react-responsive';
import './styles.scss';
import { BsMouse, BsArrowDown } from 'react-icons/bs';

function Home() {
  // ciblage du title_name
  const titleRef = useRef(null);
  // utilisation du gamma et beta pour écouter les mouvements du mobile
  const { gamma, beta } = useDeviceOrientation();
  // utilisation de useMediQuery pour déterminer le changement d'écouteur en fonction de l'écran
  const isDesktop = useMediaQuery({ minWidth: 769 });

  useEffect(() => {
    let updateBackgroundPosition = null;
    const titleElmt = titleRef.current;

    if (isDesktop) {
      updateBackgroundPosition = (e) => {
        // calcul des mouvements de la souris sur les axes X et Y
        const traX = ((4 * e.pageX) / 570) + 34;
        const traY = ((4 * e.pageY) / 570) + 50;
        titleElmt.style.backgroundPosition = `${traX}% ${traY}%`;
      };

      titleElmt.addEventListener('mousemove', updateBackgroundPosition);

      return () => {
        titleElmt.removeEventListener('mousemove', updateBackgroundPosition);
      };
    }

    updateBackgroundPosition = () => {
      // calcul pour les mouvements du mobile
      let traX = 15;
      let traY = 35;
      traX -= gamma / 5;
      traY += beta / 5;
      // math max et min pour éviter que le fond d'écran ne sorte du cadre de la page
      traX = Math.max(0, Math.min(100, traX));
      traY = Math.max(0, Math.min(100, traY));
      titleElmt.style.backgroundPosition = `${traX}% ${traY}%`;
    };

    window.addEventListener('deviceorientation', updateBackgroundPosition);

    return () => {
      window.removeEventListener('deviceorientation', updateBackgroundPosition);
    };
  }, [isDesktop]);

  return (
    <div className="home" id="home">
      <h1 className="title_name" ref={titleRef}>
        Marie Geneste
      </h1>
      <h1 className="title_job">Développeuse Web</h1>
      <div className="description">
        <p>Bienvenue sur mon Portfolio.</p>
        <p>Je suis une grande passionnée de l'Univers du Web. Je vous invite à naviguer entre les composants stellaires pour trouver votre destination. Bon voyage !</p>
      </div>
      <div className="icons">
        <div className="mouse-icon"><BsMouse /></div>
        <div className="arrow-icon"><BsArrowDown /></div>
      </div>
    </div>
  );
}

export default Home;
