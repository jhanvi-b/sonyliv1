import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons4 from '../Components/Serial4/ContainedButton4';
import Poster1 from '../Assets/Kapil sharma.png';

 
import Types4 from '../Components/Serial4/Type4';
import Chips4 from '../Components/Serial4/SeasonEp4Chip';
 
export default function Serial4() {
  return (
 
    <React.Fragment>
        <Container fixed>
        
        
       
        
        <img src= {Poster1} className= "POSTER1" alt= "POSTER1" width="600" height="450"/>
        
        <Types4/>
        <ContainedButtons4/>
        <Chips4/>
        </Container>
    </React.Fragment>
 );
}
