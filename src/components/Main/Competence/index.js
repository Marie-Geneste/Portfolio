import './styles.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AiFillHtml5 } from 'react-icons/ai';
import {
  DiCss3, DiSass, DiReact, DiNodejsSmall, DiNodejs, DiNpm,
} from 'react-icons/di';
import { SiJavascript, SiPostgresql, SiExpress } from 'react-icons/si';
import { useState } from 'react';

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
};

function Competence() {
  const [text, setText] = useState('');
  const handleHoverMouse = (event) => {
    const icon = event.target.getAttribute('name');
    console.log(icon);
    setText(competences[icon]);
  };

  return (
    <div id="competence">
      <div className="competence-icon-left">
        <AiFillHtml5 name="html" onMouseOver={handleHoverMouse} />
        <DiCss3 name="css" onMouseOver={handleHoverMouse} />
        <SiJavascript name="javascript" onMouseOver={handleHoverMouse} />
        <DiSass name="sass" onMouseOver={handleHoverMouse} />
        <DiReact name="react" onMouseOver={handleHoverMouse} />
      </div>
      <div className="pulse-ball"><span className="text">{text}</span></div>
      <div className="competence-icon-right">
        <DiNodejs name="nodejs" onMouseOver={handleHoverMouse} />
        <DiNodejsSmall name="nodejs" onMouseOver={handleHoverMouse} />
        <SiPostgresql name="postgresql" onMouseOver={handleHoverMouse} />
        <SiExpress name="express" onMouseOver={handleHoverMouse} />
        <DiNpm name="npm" onMouseOver={handleHoverMouse} />
      </div>
    </div>
  );
}

export default Competence;
