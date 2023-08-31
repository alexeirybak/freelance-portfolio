import './styles.css';
import ava from './../../img/icons/ava.png'

const BtnLiveLink = ({liveLink}) => {
  return (
    <a href={liveLink} target="_blunk" rel='noreferrer' className='btn-outline'>
      <img src={ava} alt='Аватар' className='avatar'/>
      Site
    </a>
  );
};

export default BtnLiveLink;