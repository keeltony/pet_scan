import './Footer.css';
import logo from '../../assets/images/logoFooter.svg';

export default function Footer() {
  return (
    <footer className='footer'>
      <img src={logo} alt='' />
      <div>
        <p className='footer-info'>
          г. Москва, Цветной б-р, 40 <br />
          <a className='footer-info' href='tel:+74957712111'>
            +7 495 771 21 11
          </a>
          <br />
          <a className='footer-info' href='mailto: info@skan.ru'>
            info@skan.ru
          </a>
        </p>
        <p className='footer-info top_margin' >Copyright. 2023</p>
      </div>
    </footer>
  );
}


