import { observer } from 'mobx-react-lite';
import './Search.css';

import Form from './Form/Form';
import rocketman from '../../assets/images/rocketman.svg';
import document from '../../assets/images/document.svg';
import folders from '../../assets/images/folders.svg';



const Search = observer(() => {
  return (
    <div className='search'>
      <h1 className='search_title'>
        Найдите необходимые данные в пару кликов.
      </h1>
      <p className='search_details'>
        Задайте параметры поиска. <br />
        Чем больше заполните, тем точнее поиск
      </p>
      <div className='search_body'>
        <Form />
        <div className='search_images'>
          <img src={document} alt='document' className='doc_img' />
          <img src={folders} alt='folders' className='folders_img' />
          <img src={rocketman} alt='rocketman' className='rocketman_img' />
        </div>
      </div>
    </div>
  );
});

export default Search;
