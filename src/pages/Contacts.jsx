export const Contacts = () => {
  return (
    <main className='section'>
      <div className='container'>
        <h1 className='title-1'>Contacts</h1>

        <ul className='content-list'>
          <li className='content-list__item'>
            <h2 className='title-2'>Location</h2>
            <p>Severodvinsk, Russia</p>
          </li>
          <li className='content-list__item'>
            <h2 className='title-2'>Telegram / WhatsApp</h2>
            <p>
              <a href='tel:+7116562208'>+7 (911) 656-22-08</a>
            </p>
          </li>
          <li className='content-list__item'>
            <h2 className='title-2'>Email</h2>
            <p>
              <a href='mailto:rybak2108@gmail.com'>rybak2108@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
    
  );
};

export default Contacts;
