import './styles.scss';
import {
  string,
} from 'prop-types';
import { BsGithub } from 'react-icons/bs';

function Card({
  title, url, minia, technos, github, description, disclaimer,
}) {
  return (
    <div className="card">
      <img className="card_img" src={minia} alt="miniature du site" />
      <a className="card_title" href={url} target="_blank" rel="noreferrer">{title}</a>
      <div className="card_text">
        <p className="card_disclaimer">{disclaimer}</p>
        <p className="card_description"><span className="card_subtitle">Rapport de mission : </span>{description}</p>
        <p className="card_technos"><span className="card_subtitle">Outils utilisés : </span>{technos}</p>
        <a className="card_github" href={github} target="_blank" rel="noreferrer">.<BsGithub />.</a>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
  minia: string.isRequired,
  technos: string.isRequired,
  github: string.isRequired,
  description: string.isRequired,
  // eslint-disable-next-line react/require-default-props
  disclaimer: string,
};
