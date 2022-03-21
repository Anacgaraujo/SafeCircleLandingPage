
import React from 'react';

import { useTranslation } from 'react-i18next';
import brazilianflag from '../../images/brazilflag.png';
import spanishflag from '../../images/spanishflag.png';
import usaflag from '../../images/usaflag.png';


const styles ={

  buttonlng: {
    width: '38px',
    border: 'none',
    boxSizing: 'border-box',
    borderRadius: '24px',
    background: 'none',
 }
}

const LanguageSwitcher = (props) => {
  const [lang, setLang] = React.useState('en');

  const { i18n } = useTranslation();

  const handleChangeLang = (opt) => {
    if (lang !== opt) setLang(opt);
    i18n.changeLanguage(opt);
    localStorage.setItem('language', opt);
  };

  React.useEffect(() => {
    const hasLang = localStorage.getItem('language');

    if (hasLang) {
      handleChangeLang(hasLang);
    }
  }, []);

  return (
    

    <div >


      <button style={styles.buttonlng}
        type="button"
        // className={`btn-lang ${
        //   lang === 'en' ? 'btn-lang-active' : 'btn-lang-inactive'
        // }`}
        onClick={() => handleChangeLang('en')}
      >
        <img src={usaflag} height={30} width={30} style={{borderRadius: "40%"}} />
      </button>
      <button style={styles.buttonlng}
        type="button"
        // className={`btn-lang ${
        //   lang === 'pt' ? 'btn-lang-active' : 'btn-lang-inactive'
        // }`}
        onClick={() => handleChangeLang('pt')}
      >
        <img src={brazilianflag} height={30} width={30} style={{borderRadius: "40%"}}  />
      </button>
      <button style={styles.buttonlng}
        type="button"
        // className={`btn-lang ${
        //   lang === 'es' ? 'btn-lang-active' : 'btn-lang-inactive'
        // }`}
        onClick={() => handleChangeLang('es')}
      >
        <img src={spanishflag} height={30} width={30} style={{borderRadius: "40%"}}  />
      </button>
    </div>
  );
};

export default LanguageSwitcher;