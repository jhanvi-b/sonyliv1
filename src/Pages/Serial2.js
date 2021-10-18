import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButton from '../Components/SuperDancer/GoPremium';
import Poster1 from '../Assets/Super Dancer.png';
import ButtonLink2 from '../Components/SuperDancer/ButtonLink2';
 
import TypesSerial2 from '../Components/SuperDancer/TextContent';
import ChipsSerial2 from '../Components/SuperDancer/EpisodesChip';
 
export default function Serial2() {
  return (
 
    <React.Fragment>
        <Container fixed>
        
        
        <ButtonLink2/>
        
        <img src= {Poster1} className= "POSTER1" alt= "POSTER1" width="600" height="450"/>
        
        <TypesSerial2/>
        <ContainedButton/>
        <ChipsSerial2/>
        </Container>
    </React.Fragment>
 );
}
