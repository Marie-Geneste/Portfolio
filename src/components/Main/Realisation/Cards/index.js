import Card from 'src/components/Main/Realisation/Cards/Card';
import {
  arrayOf, shape,
} from 'prop-types';

function Cards({ datas }) {
  return (
    <div className="results">
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
