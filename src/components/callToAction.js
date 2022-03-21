import React from 'react';
import {} from "reactstrap";
import background from "../images/bg01.png";
import '../../src/index.css';
import applestore from "../images/applestore.png";
import googleplay from '../images/googleplay.png';
import { useTranslation } from 'react-i18next';
import background02 from "../images/bg02.png";
import { StyleRoot } from 'radium';




const styles ={

     pagebackground: {
        backgroundImage: `url(${background})`,
        maxHeight:'100vh',
        marginTop:'-90px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
            "@media (max-width: 1224px)": {
                textAlign: "center",
                backgroundImage: `url(${background02})`,
            },
    },

    maintitle: {
        color: "#d13669",
        textAlign: "center",
        marginTop: '20vh',
        fontSize: '75px',
        fontWeight: '500',
        padding: '10px',
        fontFamily: 'Poppins',
    },

    tagline: {
        color: "#342176",
        textAlign: "center",
        fontSize: '25px',
        fontWeight: '500',
        padding: '10px',
        fontFamily: 'Poppins',
    },

    text: {
        color: '#6d757d',
        textAlign: "center",
        fontSize: '15px',
        fontWeight: '400',
        padding: '10px',
        fontFamily: 'Poppins',
    },

    images: {
        align: 'center',
    },

    buttonhero: {
        backgroundColor: 'transparent',
        height: '60px', 
        width: '200px',
        border: '0 solid transparent'
       // marginTop: '10px'
    }

}
  
const CallToAction = (props) => {
    const { t } = useTranslation();
      

    const handleGoTo = (opt) => {
        switch (opt) {
          case 'google': {
            window.open(
              'https://play.google.com/store/apps/details?id=com.safecircle&hl=pt_BR&gl=US',
              '_blank'
            );
    
            break;
          }
          case 'apple': {
            window.open(
              'https://apps.apple.com/us/app/safe-circle-app/id1534615814',
              '_blank'
            );
            break;
          }
          default:
        }
      };
 
    return (<StyleRoot>
      <div style={styles.pagebackground}>

            <div className="container">


            <div className="row justify-content-md-center">
                <div className="col col-lg-6">
                    <h1 style={styles.maintitle}>Safe Circle</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                
                <div className="col-md-auto">

                <h3 style={styles.tagline}>{t('description.part1')}</h3>
                </div>
            </div>
                <div className="row justify-content-center">
                    <div className="col col-lg-6">
                        <p style={styles.text}> {t('description.part2')}</p>
                    </div>
                </div>
                {/* <div class="row justify-content-center">
                    <div class="col col-lg-6">
                        <p style={styles.text}> {t('description.part3')}</p>
                    </div>
                </div> */}

                <div className="row justify-content-center">
                    <div className="col col-lg-6">
                    &nbsp;
                    &nbsp;
                    </div> 
                </div>
           

                <div className="row justify-content-md-center">
                    {/* <div className="col col-lg-2"> */}
                    <div className="col-md">
                    <button style={styles.buttonhero} 
                    type="button"
                    className="btnhero"
                    onClick={() => handleGoTo('apple')}
                  >
                    <img
                      src={applestore}
                      height={60} 
                      width={200}
                      alt="Download SafeCircle from Apple Store"
                    />
                  </button>
                    </div>
                    {/* <div className="col col-lg-1">
                    
                    </div> */}
                    {/* <div className="col col-lg-2"> */}
                    <div className="col-md">
                    <button
                    style={styles.buttonhero} 
                    type="button"
                    className="btnhero"
                    height={60} 
                      width={200}
      
                    onClick={() => handleGoTo('google')}
                  >
                    <img
                      src={googleplay}
                      height={60} 
                      width={200}
                      alt="Download SafeCircle from Google Store"
                    />
                  </button>
                    </div>
                </div> 

                <div className="row justify-content-center">
                    <div className="col col-lg-6">
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    </div> 
                </div>

            </div>
            

        <div style={styles.images}>

        

        </div>

      </div>
      </StyleRoot>
     
    );
    };

   
export default CallToAction;