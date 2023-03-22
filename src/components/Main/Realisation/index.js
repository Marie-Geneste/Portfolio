import { useEffect, useState } from 'react';
import './styles.scss';
import realData from '../../../data/real';
import Cards from './Cards';

function Realisation() {
  const [resultData] = useState(realData);

  useEffect(() => {
    const target = document.querySelector('#msg');
    const message = 'Mes missions';
    let index = 0;
    const interval = 400;
    const showText = function () {
      if (index < message.length) {
        // eslint-disable-next-line no-plusplus
        target.append(message[index++]);
        setTimeout(showText, interval);
      }
    };

    showText();
  }, []);

  return (
    <div id="realisation">
      <div id="msg" />
      <Cards datas={resultData} />
    </div>
  );
}

export default Realisation;
