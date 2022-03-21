import React from 'react';
import { Container, Row, Col } from "reactstrap"; 
import {FeaturescardCircle,
    Featurescardemergency,
    FeaturescardPin,
    FeaturescardAlert,
    FeaturescardGetMeOut,
    FeaturescardPrivacy} from './featurescard';
    import { StyleRoot } from 'radium';


const FeaturesContainer = () => {

    const styles = {
        divcontainer:{
            background: '#faf8f8', 
            width: '100vw',
            padding: '20px',     
        },
   
        h1:{
            fontFamily: 'Poppins',
            color: "#342176",
            textAlign: 'center',
        },
        row:{
            marginBottom:'10px',
        },
        col:{
            marginBottom:'10px',
        }
    }

    return(
        <StyleRoot>
        <div style={styles.divcontainer}>
            <Container style={styles.container}>
                <h1 style={styles.h1}>Features</h1>
        <Row style={styles.row}>
            <Col xs={6} md={4}style={styles.col}>
                 <FeaturescardPrivacy/>
                
            </Col>
            <Col xs={6} md={4} style={styles.col}>
                <FeaturescardGetMeOut/>
            </Col>
            <Col xs={6} md={4} style={styles.col}>
                <Featurescardemergency/>
            </Col>
        </Row>
    
        <Row>
            <Col xs={6} md={4}  style={styles.col}>
                <FeaturescardPin/>
            </Col>
            <Col xs={6} md={4}  style={styles.col}>
                <FeaturescardAlert/>
            </Col>
            <Col xs={6} md={4}  style={styles.col}>
                <FeaturescardCircle/>
            </Col>
        </Row>
        </Container>

        </div>
        </StyleRoot>
    )
};

export default FeaturesContainer;