import './styles.scss';
import cv from '../../../assets/C.V.Marie-Geneste.jpg';

function CV() {
  return (
    <div className="CV" id="CV">
      <a href="https://smallpdf.com/fr/result#r=8c884eed2c3f3be1e58d4f819e03e285&t=share-document" target="_blank" rel="noreferrer"><img className="cv_image" src={cv} alt="cv" /></a>
    </div>
  );
}

export default CV;
