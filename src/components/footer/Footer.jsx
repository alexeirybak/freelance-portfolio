import './styles.css'
import vk from './../../img/icons/vk.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <ul className='social'>
            <li className='social__item'>
              <a href='https://vk.com/alexeirybak'>
                <img src={vk} alt='Link' />
              </a>
            </li>
            <li className='social__item'>
              <a href='https://github.com/alexeirybak'>
                <img src={gitHub} alt='Link' />
              </a>
            </li>
          </ul>
          <div className='copyright'>
            <p>© {currentDate} Alexei Rybak / Production</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
