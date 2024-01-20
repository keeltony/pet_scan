import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import './NavigationMenu.css';

import logo from '../../../assets//images/logoHeader.svg';
import avatar from '../../../assets/images/userIconMobile.svg';
import store from '../../../store/store';

const NavigationMenu = observer(() => {
  const [isActive, setActive] = useState(false);

  const login = localStorage.getItem('login');

  useEffect(() => {
    store.checkToken();
    store.getCompaniesInfo();
  }, []);

  return (
    <div className='nav_button__open' onClick={() => setActive(true)}>
      {isActive ? (
        <div className='nav_menu'>
          <div className='nav_top'>
            <img className='nav_logo' src={logo} alt='' />
            <button
              className='nav_button__close'
              onClick={(e) => {
                e.stopPropagation();
                setActive(false);
              }}
            ></button>
          </div>
          <nav className='nav_nav'>
            <Link className='nav_nav__link' to='/'>
              Главная
            </Link>
            <a className='nav_nav__link' href='#tariffs'>
              Тарифы
            </a>
            <Link className='nav_nav__link' to='/error'>
              FAQ
            </Link>
          </nav>
          {store.token ? (
            <div className='nav__user_info'>
              <span className='nav__username'>{login}</span>
              <img
                className='nav__user_avatar'
                src={avatar}
                alt='user avatar'
              />
              <button
                className='nav__logout'
                onClick={() => {
                  store.setToken('');
                  localStorage.clear();
                }}
              >
                <Link to='/'>Выйти</Link>
              </button>
            </div>
          ) : (
            <div className='nav__not_signed'>
              <Link className='nav__sign_up' to='/error'>
                Зарегистрироваться
              </Link>
              <Link className='nav__sign_in' to='/auth'>
                Войти
              </Link>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
});

export default NavigationMenu;
