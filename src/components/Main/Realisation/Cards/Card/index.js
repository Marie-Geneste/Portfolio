import './styles.scss';
import {
  string,
} from 'prop-types';

function Card({
  title, url, minia, technos, github, description, disclaimer,
}) {
  return (
    <div className="card">
      <img className="card_img" src={minia} alt="miniature du site" />
      <div className="card_text">
        <a href={url} target="_blank" rel="noreferrer">{title}</a>
        <p className="card_disclamer">{disclaimer}</p>
        <p className="card_description">Rapport de la mission : {description}</p>
        <p className="card_technos">Outils utilisés : {technos}</p>
        <a href={github}>Lien github</a>
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
  disclaimer: string.isRequired,
};
