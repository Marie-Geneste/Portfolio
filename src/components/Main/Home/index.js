import { useRef } from 'react';
import './styles.scss';

function Home() {
  const titleRef = useRef(null);

  function handleMouseOver() {
    if (titleRef.current) {
      titleRef.current.style.backgroundPosition = '42% 52%';
    }
  }

  function handleMouseOut() {
    if (titleRef.current) {
      titleRef.current.style.backgroundPosition = 'initial';
    }
  }

  return (
    <div className="home">
      <h1 className="title_name" ref={titleRef} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        Marie Geneste
      </h1>
      <h1 className="title_job">Développeuse Web</h1>
    </div>
  );
}

export default Home;
