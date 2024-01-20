import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './Authorized.css';

import store from '../../../store/store';
import avatar from '../../../assets/images/userIcon.svg';
import Loader from '../../Loader/Loader';


const Authorized = observer(() => {
  useEffect(() => {
    store.checkToken();
    store.getCompaniesInfo();
  }, []);
  const login = localStorage.getItem('login');
  return (
    <div className='authorized'>
      <div className='companies_wrapper'>
        {store.isCompaniesLoading ? (
          <Loader />
        ) : (
          <>
            <p className='companies_info'>
              Использовано компаний
              <span className='companies_number'>
                {store.companiesInfo.used}
              </span>
            </p>
            <p className='companies_info'>
              Лимит по компаниям
              <span className='companies_number companies_number__limit'>
                {store.companiesInfo.limit}
              </span>
            </p>
          </>
        )}
      </div>
      <div className='user_info'>
        <span className='username'>{login}</span>
        <button
          className='logout'
          onClick={() => {
            store.setToken('');
            localStorage.clear();
          }}
        >
          <Link className='header_nav__link' to='/'>
            Выйти
          </Link>
        </button>
      </div>
      <img className='user_avatar' src={avatar} alt='user avatar' />
    </div>
  );
});

export default Authorized;
