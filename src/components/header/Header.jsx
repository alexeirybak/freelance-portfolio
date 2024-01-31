import './styles.css'

const Header = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/CV.rtf'; 
    downloadLink.download = 'CV.rtf';
    downloadLink.click();
  };

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <h1 className='header__title'>
          <strong>
            Hi, my name is <em>Alexei</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className='header__text'>
          <p>with passion for learning and creating.</p>
        </div>
        <a href='#!' className='btn' onClick={handleDownload}>
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
