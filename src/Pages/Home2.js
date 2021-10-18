import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleTabs from '../Components/HomePage/tabs';
import ResponsiveFontSizes from '../Components/HomePage/MostWatched';
import Poster1 from '../Assets/chalo koi baat nahi.jpeg';
import Poster2 from '../Assets/scam 1982.jpeg';
import Poster3 from '../Assets/Gullak.jpeg';
import Poster4 from '../Assets/Your Honor.jpeg';
import TrendingTrailers from '../Components/HomePage/Trendingtrailers'
import SwipeableTextMobileStepper from '../Components/HomePage/Carousel'; 
import SingleLineImageList from '../Components/HomePage/Most';
import Trending from '../Components/HomePage/Trending';



 


  

export default function Home2() {
  
  return (
    
       
    <React.Fragment>
        <Container fixed>
        
        <SimpleTabs/>
        <SwipeableTextMobileStepper/>
        <ResponsiveFontSizes/>
        <SingleLineImageList/>
        
        
        <TrendingTrailers/>
        <Trending/>
        
        </Container>
       
    </React.Fragment>
    
    
    
 );
}
