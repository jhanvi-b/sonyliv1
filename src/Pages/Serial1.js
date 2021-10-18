import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleTabs from '../Components/HomePage/tabs';
import ResponsiveFontSizes from '../Components/TvShows/TopShows';
import Poster1 from '../Assets/serialsearchKRPK.png';
import ButtonLink from '../Components/Kuchrang.js/ButtonLink';
import ContainedButtons from '../Components/Kuchrang.js/ContainedButton'; 
import Types from '../Components/Kuchrang.js/Typography';
import Chips from '../Components/Kuchrang.js/SeasonChip';
 
export default function Serial1() {
  return (
 
    <React.Fragment>
        <Container fixed>
        
        
        <ButtonLink/>
        <ResponsiveFontSizes/>
        <img src= {Poster1} className= "POSTER1" alt= "POSTER1" width="600" height="450"/>
        
        <Types/>
        <ContainedButtons/>
        <Chips/>
        </Container>
    </React.Fragment>
 );
}
