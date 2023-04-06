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
import { useMediaQuery } from 'react-responsive';
import './styles.scss';
import { BsMouse, BsArrowDown } from 'react-icons/bs';

function Home() {
  const titleRef = useRef(null);
  const isDesktop = useMediaQuery({ minWidth: 769 });

  useEffect(() => {
    let updateBackgroundPosition = null;

    if (isDesktop) {
      updateBackgroundPosition = (e) => {
        const traX = ((4 * e.pageX) / 570) + 34;
        const traY = ((4 * e.pageY) / 570) + 50;
        titleRef.current.style.backgroundPosition = `${traX}% ${traY}%`;
      };

      const titleElmt = titleRef.current;
      titleElmt.addEventListener('mousemove', updateBackgroundPosition);

      return () => {
        titleElmt.removeEventListener('mousemove', updateBackgroundPosition);
      };
    }

    updateBackgroundPosition = (e) => {
      let traX = 34;
      let traY = 50;
      traX -= e.gamma / 50;
      traY += e.beta / 570;
      traX = Math.max(0, Math.min(100, traX));
      traY = Math.max(0, Math.min(100, traY));
      titleRef.current.style.backgroundPosition = `${traX}% ${traY}%`;
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
