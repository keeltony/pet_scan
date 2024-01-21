import { useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import logo from '../../assets/images/logoHeader.svg';
import Authorized from './Authorized/Authorized';
import NotAuthorized from './NotAuthorized/NotAuthorized';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import store from '../../store/store';

const Header = observer(() => {
  useEffect(() => {
    store.checkToken();
  }, []);

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header_logo' src={logo} alt='logo' />
      </Link>
      <nav className='header_nav'>
        <Link className='header_nav__link' to='/'>
          Главная
        </Link>
        <a className='header_nav__link' href='#tariffs'>
          Тарифы
        </a>
        <Link className='header_nav__link' to='/error'>
          FAQ
        </Link>
      </nav>
      {store.token ? <Authorized /> : <NotAuthorized />}
      <NavigationMenu />
    </header>
  );
});

export default Header