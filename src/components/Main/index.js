import './styles.scss';
import Home from './Home';
import Competence from './Competence';
import Realisation from './Realisation';
import CV from './CV';

function Main() {
  return (
    <div className="main">
      <Home />
      <Competence />
      <Realisation />
      <CV />
    </div>
  );
}

export default Main;
