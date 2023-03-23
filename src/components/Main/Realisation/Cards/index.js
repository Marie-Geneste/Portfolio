import Card from 'src/components/Main/Realisation/Cards/Card';
import {
  arrayOf, shape,
} from 'prop-types';
import './styles.scss';

function Cards({ datas }) {
  return (
    <div className="cards">
      {
        datas.map((data) => (
          <Card key={data.id} {...data} />
        ))
      }
    </div>
  );
}

export default Cards;

Cards.propTypes = {
  datas: arrayOf(shape()).isRequired,
};
