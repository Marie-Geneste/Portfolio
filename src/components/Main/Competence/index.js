import './styles.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AiFillHtml5 } from 'react-icons/ai';

function Competence() {
  return (
    <div id="competence">
      <div className="competence-icon-left"><AiFillHtml5 /></div>
      <div className="pulse-ball">o</div>
      <div className="competence-icon-right"><AiFillHtml5 /></div>
    </div>
  );
}

export default Competence;
