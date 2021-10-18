import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons3 from '../Components/Serial3/ContainedButton3';
import Poster1 from '../Assets/Indian Idol.png';

 
import Types3 from '../Components/Serial3/Type3';
import Chips3 from '../Components/Serial3/SeasonEpChip';
 
export default function Serial3() {
  return (
 
    <React.Fragment>
        <Container fixed>
        
        
       
        
        <img src= {Poster1} className= "POSTER1" alt= "POSTER1" width="600" height="450"/>
        
        <Types3/>
        <ContainedButtons3/>
        <Chips3/>
        </Container>
    </React.Fragment>
 );
}
