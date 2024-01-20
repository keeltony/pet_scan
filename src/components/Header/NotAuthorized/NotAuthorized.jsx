
import './NotAuthorized.css';
import { Link } from 'react-router-dom';

const NotAuthorized = () => {
  return (
    <div className='not_authorized'>
      <Link className='authorized_up' to='/error'>
        Зарегистрироваться
      </Link>
      <div className='line'></div>
      <Link className='authorized_in' to='/auth'>
        Войти
      </Link>
    </div>
  );
};

export default NotAuthorized;
