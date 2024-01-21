import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import './Main.css';
import store from '../../store/store';
import service from '../../assets/images/service.svg';
import HorizontalSlider from './Slider/Slider';
import TariffInfo from './TariffInfo/TariffInfo';

const Main = observer(() => {
  document.title = 'Scan service';

  return (
    <div className='main'>
      <section className='search_service'>
        <div>
          <h1 className='search_service__title'>
            сервис по поиску публикаций <br />
            о компании <br />
            по ее ИНН <br />
          </h1>
          <div className='search_service__mobile'>
            <p className='search_service__info'>
              Комплексный анализ публикаций, получение данных в формате PDF на
              электронную почту.
            </p>
            <button className='search_service__request_button'>
              {store.token ? (
                <Link to='/search'>Запросить данные</Link>
              ) : (
                <Link to='/auth'>Войти</Link>
              )}
            </button>
          </div>
        </div>
        <div className='search_service__img'>
          <img className='image' src={service} alt='main page' />
        </div>
      </section>
      <section className='why_we'>
        <h2 className='h2__title'>Почему именно мы</h2>
        <div>
          <HorizontalSlider />
        </div>
        <div className='why_we__img'></div>
      </section>
      <section id='tariffs'>
        <h2 className='h2__title'>наши тарифы</h2>
        <TariffInfo />
      </section>
    </div>
  );
});

export default Main;
