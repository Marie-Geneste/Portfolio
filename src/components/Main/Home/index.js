import { useEffect } from 'react';
import './styles.scss';

function Home() {
  useEffect(() => {
    let mouseX;
    let mouseY;
    const updateBackgroundPosition = (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
      const traX = ((4 * mouseX) / 570) + 40;
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
    <div className="home">
      <h1 className="title_name">
        Marie Geneste
      </h1>
      <h1 className="title_job">Développeuse Web</h1>
    </div>
  );
}

export default Home;
