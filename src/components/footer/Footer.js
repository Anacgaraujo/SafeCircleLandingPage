import React from 'react';
import Logo from '../../images/Logo.png';
import { useTranslation } from 'react-i18next';
import '../../App.css';




const Footer = () => {
    const { t } = useTranslation();

    return(
        <div className='footerContainer'>

            <div className='footerlogo'>
            <img src={Logo}  alt='Safety check circle privacy thumbnail'/>
            </div>

            <div className="footerlinks">
                <a href="mailto:iinfo@safecircleapp.com">info@safecircleapp.com</a>

               
               
            </div>

        </div>
    )
}

export default Footer;