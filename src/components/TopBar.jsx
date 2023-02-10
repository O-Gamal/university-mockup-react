import { useState } from 'react';
import socialMedia from '../data/socialMedia';

const TopBar = () => {
  const [lang, setLang] = useState('عربي');
  const changeLang = () => {
    if (lang === 'عربي') {
      setLang('English');
    } else {
      setLang('عربي');
    }
  };

  return (
    <div className='top-nav'>
      <div className='container'>
        <div className='social-media'>
          <span>Follow us:</span>
          {socialMedia.map(({ url, icon, alt }, index) => (
            <a key={index} href={url} target='_blank'>
              <img src={icon} alt={alt} />
            </a>
          ))}
        </div>
        <div className='lang' onClick={changeLang}>
          <span>{lang}</span>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
