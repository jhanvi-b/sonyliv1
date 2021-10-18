import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleTabs from '../Components/HomePage/tabs';
import ResponsiveFontSizes from '../Components/TvShows/TopShows';

import Poster5 from '../Assets/KBC.png';
import Poster6 from '../Assets/Bade ache lagte h.png';
import TrendingTrailers from '../Components/TvShows/Clips'
import SwipeableTextMobileStepper from '../Components/TvShows/Carousel'; 
import Chips from '../Components/TvShows/Chip';
import ButtonBases from '../Components/TvShows/ClickableImages';

 
export default function TvShows() {
  return (
 
    <React.Fragment>
        <Container fixed>
        
        <SimpleTabs/>
        <SwipeableTextMobileStepper/>
        <Chips/>
        <ResponsiveFontSizes/>
        <ButtonBases/>
        
        
        
        
        <TrendingTrailers/>
        <img src= {Poster5} className= "POSTER5" alt= "POSTER5" width="550" height="400"/>
        <img src= {Poster6} className= "POSTER6" alt= "POSTER6" width="550" height="400"/>
        
        </Container>
    </React.Fragment>
 );
}
