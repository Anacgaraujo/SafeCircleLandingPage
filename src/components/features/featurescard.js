import React from 'react';
import {} from "reactstrap";
import { useTranslation } from 'react-i18next';

//Images//
import alert from '../../images/alert.png';
import emergency from '../../images/emergency.png';
import getmeout from '../../images/getmeout.png';
import journey from '../../images/journey.png';
import privacy from '../../images/privacy.png';
import security from '../../images/security.png';



const styles = {

    container: {
       // width: '20vw',
        // padding: '10px',
        background: '#FFFFFF',
        boxShaddow: '5px 10px red',
        fontFamily: 'Poppins',
            
    },

    textcontainer:{
        //width: '20vw',
        padding: '10px',
    },

    h1: {
        fontSize: '15px',
        color: '#37207b',
    },

    p: {
        fontSize: '12px',
        color: '#404040',
    }
}

const FeaturescardCircle = (props) => { 
    const { t } = useTranslation();

return (
    <div style={styles.container} className="shadow-sm">
        
        <div style={styles.textcontainer}>
        <img src={journey} height={55} alt='Safety check circle privacy thumbnail'/>
            <h1 style={styles.h1}>{t('features.circleHeader')}</h1>
            <p style={styles.p}>{t('features.circleText')}</p>
        </div>
    </div>
);

};

const Featurescardemergency = (props) => { 
    const { t } = useTranslation();
return (
    <div style={styles.container} className="shadow-sm">
        <div style={styles.textcontainer}>
        <img src={emergency} height={55} alt='Safe Circle Security pin thmbnail'/>
            <h1 style={styles.h1}>{t('features.emergencyHeader')}</h1>
            <p style={styles.p}>{t('features.emergencyText')}</p>
        </div>
    </div>
);

};

const FeaturescardPin = (props) => { 
    const { t } = useTranslation();
return (
    <div style={styles.container} className="shadow-sm">
        <div style={styles.textcontainer}>
        <img src={security} height={55} alt='Safe Circle Security pin thmbnail'/>
            <h1 style={styles.h1}>{t('features.pinheader')}</h1>
            <p style={styles.p}>{t('features.pinTextpart1')}</p>
            {/* <p style={styles.p}>{t('features.pinTextpart2')}</p>
            <p style={styles.p}>{t('features.pinTextpart3')}</p> */}
        </div>
    </div>
);

};

const FeaturescardAlert = (props) => { 
    const { t } = useTranslation();
return (
    <div style={styles.container} className="shadow-sm">
        <div style={styles.textcontainer}>
        <img src={alert} height={55} alt='Safe Circle Security pin thmbnail'/>
            <h1 style={styles.h1}>{t('features.alertHeader')}</h1>
            <p style={styles.p}>{t('features.alertText')}</p>
        </div>
    </div>
);

};

const FeaturescardGetMeOut = (props) => { 
    const { t } = useTranslation();
return (
    <div style={styles.container} className="shadow-sm">
        <div style={styles.textcontainer}>
        <img src={getmeout} height={55} alt='Safe Circle Security pin thmbnail'/>
            <h1 style={styles.h1}>{t('features.getmeoutHeader')}</h1>
            <p style={styles.p}>{t('features.getmeoutText')}</p>
        </div>
    </div>
);

};


const FeaturescardPrivacy = (props) => { 
    const { t } = useTranslation();
return (
    <div style={styles.container} className="shadow-sm">
        <div style={styles.textcontainer}>
        <img src={privacy} height={55} alt='Safe Circle Security pin thmbnail'/>
            <h1 style={styles.h1}>{t('features.privacyHeader')}</h1>
            <p style={styles.p}>{t('features.privacyText')}</p>
        </div>
    </div>
);

} ;



export {
    FeaturescardCircle,
    Featurescardemergency,
    FeaturescardPin,
    FeaturescardAlert,
    FeaturescardGetMeOut,
    FeaturescardPrivacy
}