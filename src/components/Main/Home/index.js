// import { useEffect } from 'react';
// import './styles.scss';
// import { BsMouse, BsArrowDown } from 'react-icons/bs';

// function Home() {
//   // Pour bouger le background image au survol de la souris sur le title name
//   useEffect(() => {
//     let mouseX;
//     let mouseY;
//     const updateBackgroundPosition = (e) => {
//       mouseX = e.pageX;
//       mouseY = e.pageY;
//       const traX = ((4 * mouseX) / 570) + 34;
//       const traY = ((4 * mouseY) / 570) + 50;
//       document.querySelector('.title_name').style.backgroundPosition = `${traX}% ${traY}%`;
//     };
//     const titleElmt = document.querySelector('.title_name');
//     titleElmt.addEventListener('mousemove', updateBackgroundPosition);
//     return () => {
//       titleElmt.removeEventListener('mousemove', updateBackgroundPosition);
//     };
//   }, []);

//   return (
//     <div className="home" id="home">
//       <h1 className="title_name">
//         Marie Geneste
//       </h1>
//       <h1 className="title_job">Développeuse Web</h1>
//       {/* <p className="citation">"C'est en forgeant que l'on devient forgeron"</p> */}
//       <div className="description">
//         <p>Bienvenue sur mon Portfolio.</p>
//         <p>Je suis une grande passionnée de l'Univers du Web. Je vous invite à naviguer entre les composants stellaires pour trouver votre destination. Bon voyage !</p>
//       </div>
//       <div className="icons">
//         <div className="mouse-icon"><BsMouse /></div>
//         <div className="arrow-icon"><BsArrowDown /></div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import { useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { isMobile } from 'react-device-detect';
import './styles.scss';
import { BsMouse, BsArrowDown } from 'react-icons/bs';

function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    let updateBackgroundPosition = null;
    const titleElmt = titleRef.current;

    if (!isMobile) {
      updateBackgroundPosition = (e) => {
        const traX = ((4 * e.pageX) / 570) + 34;
        const traY = ((4 * e.pageY) / 570) + 50;
        titleElmt.style.backgroundPosition = `${traX}% ${traY}%`;
      };

      titleElmt.addEventListener('mousemove', updateBackgroundPosition);

      return () => {
        titleElmt.removeEventListener('mousemove', updateBackgroundPosition);
      };
    }

    updateBackgroundPosition = (e) => {
      // let traX = 15;
      // let traY = 35;
      // traX -= e.gamma / 5;
      // traY += e.beta / 5;
      // traX = Math.max(0, Math.min(100, traX));
      // traY = Math.max(0, Math.min(100, traY));
      const traX = ((4 * e.gamma) / 570) + 15;
      const traY = ((4 * e.beta) / 570) + 35;
      titleElmt.style.backgroundPosition = `${traX}% ${traY}%`;
    };

    window.addEventListener('deviceorientation', updateBackgroundPosition);

    return () => {
      window.removeEventListener('deviceorientation', updateBackgroundPosition);
    };
  }, []);

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
