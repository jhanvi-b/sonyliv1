import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Typography variant="subtitle1" gutterBottom>
        After years of being married, Dev and Sonakshi have drifted further apart. This is the farthest they have ever been. Can they rekindle their spirit of love?
      </Typography>
      <Typography variant="body1" gutterBottom>
        Cast : Shaheer Sheikh, Erica Fernandes, Supriya Pil Gaonkar
      </Typography>
      <Typography variant="body1" gutterBottom>
        Genre : Drama, Romance
      </Typography>
     
      <Typography variant="body2" gutterBottom>
        Language : Hindi
      </Typography>
    </div>
  );
}
