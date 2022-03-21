import React from "react";
//import './App.css';
import Topbar from './components/navbar';
import CallToAction from './components/callToAction';
import FeaturesContainer from '../src/components/features/featuresContainer';
import FounderBio from './components/founder/founderbio';
//import Container from './components/imgBanner/imgBanner';
import Images from './components/imgBanner/imgBanner';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Topbar />
    <CallToAction />
    <FeaturesContainer/>
    <FounderBio/>
    <Images/>
    <Footer/>
    </>
  );
}

export default App;
