import React from 'react';
import '../../App.css';
import {Card, CardTitle, CardText, Row, Col} from "reactstrap";
import { useTranslation } from 'react-i18next';


const FounderBio = () => {
    const { t } = useTranslation();

    
    return(
        <div className="d-flex justify-content-center founderContainer">
            <Row className="founderrow d-flex justify-content-center shadow-sm" >
                <Col sm="6"  >
                    <Card body outline color="white" >
                    <CardTitle className='founderquote'>{t('authorbox.cardtitlepart01')}<span className="founderspam">{t('authorbox.cardtitlepart02')}</span>
                    {t('authorbox.cardtitlepart03')}</CardTitle>
                    <CardText className="text-muted founderCardQuote">{t('authorbox.cardtextname')}</CardText>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card  body outline color="white" >
                    <CardTitle className='spacer'>&nbsp;<br/>&nbsp;</CardTitle>
                    <CardText>{t('authorbox.cardtext')}</CardText>
                    </Card>
                </Col>
            </Row>
        </div>
    )
};

export default FounderBio;