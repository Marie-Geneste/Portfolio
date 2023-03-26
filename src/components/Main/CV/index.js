import './styles.scss';
import { GiReturnArrow } from 'react-icons/gi';
import cv from '../../../assets/C.V.Marie-Geneste.jpg';

function CV() {
  return (
    <div className="cv" id="CV">
      <h1 className="cv_title">Mon C.V.</h1>
      <div className="cv_element">
        <a href="https://smallpdf.com/fr/result#r=8c884eed2c3f3be1e58d4f819e03e285&t=share-document" target="_blank" rel="noreferrer"><img className="cv_image" src={cv} alt="cv" /></a>
        <span className="cv_element_icon"><GiReturnArrow /></span>
      </div>
    </div>
  );
}

export default CV;
