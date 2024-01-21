import key from '../../assets/images/key.svg';
import './Authorization.css';
import Form from './Form/Form';

export default function Authorization() {
  return (
    <div className='authorization'>
      <h2 className='auth__title'>
        Для оформления подписки <br /> на тариф, необходимо авторизоваться.
      </h2>
      <img className='auth-img' src={key} alt='key' />
      <Form />
    </div>
  );
}


