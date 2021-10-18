import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(5.5),
    },
  },
}));

export default function Chips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
        
      
      
      
        <Grid container spacing={2}>
        <Grid item xs={4}>
      <Chip
        
        label="SET Shows"
        clickable
        color="primary"
        
        
      />
      </Grid>
      <Grid item xs={4}>
       <Chip
        
        label="SAB Show"
        clickable
        color="grey"
        
        
      />
      </Grid>
      <Grid item xs={4}>
      <Chip
        
        label="Marathi Show"
        clickable
        color="grey"
        
        
      />
      </Grid>
      </Grid>
    </div>
  );
}
