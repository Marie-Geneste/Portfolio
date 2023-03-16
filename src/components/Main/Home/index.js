import { useEffect } from 'react';
import './styles.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BsMouse, BsArrowDown } from 'react-icons/bs';

function Home() {
  useEffect(() => {
    let mouseX;
    let mouseY;
    const updateBackgroundPosition = (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
      const traX = ((4 * mouseX) / 570) + 34;
      const traY = ((4 * mouseY) / 570) + 50;
      console.log(traX);
      document.querySelector('.title_name').style.backgroundPosition = `${traX}% ${traY}%`;
    };
    const titleElmt = document.querySelector('.title_name');
    titleElmt.addEventListener('mousemove', updateBackgroundPosition);
    return () => {
      titleElmt.removeEventListener('mousemove', updateBackgroundPosition);
    };
  }, []);

  return (
    <div className="home" id="home">
      <h1 className="title_name">
        Marie Geneste
      </h1>
      <h1 className="title_job">Développeuse Web</h1>
      {/* <p className="citation">"C'est en forgeant que l'on devient forgeron"</p> */}
      <div className="description">
        <p>Bienvenue sur mon Portfolio.</p>
        <p>Je suis une grande passionnée de l'Univers du Web. Je vous invite à naviguer entre les composants stellaires pour trouver votre destination. Bon voyage !</p>
      </div>
      <div className="mouse-icon"><BsMouse /></div>
      <div className="arrow-icon"><BsArrowDown /></div>
    </div>
  );
}

export default Home;
