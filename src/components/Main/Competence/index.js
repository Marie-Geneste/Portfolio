import './styles.scss';
import { useState } from 'react';
import html from '../../../assets/html.png';
import css from '../../../assets/css.png';
import javascript from '../../../assets/javascript.png';
import sass from '../../../assets/sass.png';
import react from '../../../assets/react.png';
import nodejs from '../../../assets/nodejs.png';
import express from '../../../assets/express.png';
import npm from '../../../assets/npm.png';
import postgresql from '../../../assets/postgresql.png';
import mongodb from '../../../assets/mongodb.png';

const competences = {
  html: 'HTML',
  css: 'CSS',
  javascript: 'JavaScript',
  sass: 'Sass',
  react: 'React',
  nodejs: 'Node.js',
  postgresql: 'PostgreSQL',
  express: 'Express.js',
  npm: 'npm',
  mongodb: 'mongoDB',
};

function Competence() {
  const [text, setText] = useState('');
  const handleHoverMouse = (event) => {
    const icon = event.target.getAttribute('name');
    console.log(icon);
    setText(competences[icon]);
  };

  return (
    <div id="competence" className="competence">
      <div className="competence-icon-left">
        <img className="competence_img" src={html} alt="html" name="html" onMouseEnter={handleHoverMouse} />
        <img className="competence_img" src={css} alt="css" name="css" onMouseEnter={handleHoverMouse} />
        <img className="competence_img" src={javascript} alt="javascript" name="javascript" onMouseEnter={handleHoverMouse} />
        <img className="competence_img" src={sass} alt="sass" name="sass" onMouseEnter={handleHoverMouse} />
        <img className="competence_img" src={react} alt="react" name="react" onMouseEnter={handleHoverMouse} />
      </div>
      <div className="pulse-ball" id="pulseball"><span className="text">{text}</span></div>
      <div className="competence-icon-right">
        <img className="competence_img" src={nodejs} alt="nodejs" name="nodejs" onMouseEnter={handleHoverMouse} />
        <img className="competence_img" src={express} alt="express" name="express" onMouseEnter={handleHoverMouse} />
        <img className="competence_img" src={npm} alt="npm" name="npm" onMouseEnter={handleHoverMouse} />
        <img className="competence_img" src={postgresql} alt="postgresql" name="postgresql" onMouseEnter={handleHoverMouse} />
        <img className="competence_img" src={mongodb} alt="mongodb" name="mongodb" onMouseEnter={handleHoverMouse} />
      </div>
    </div>
  );
}

export default Competence;
