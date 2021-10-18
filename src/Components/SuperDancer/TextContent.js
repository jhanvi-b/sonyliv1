import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function TypesSerial2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Typography variant="subtitle1" gutterBottom>
      A reality show showcasing the most talented dancers on stage. It being the fourth season.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Cast : Shilpa Shetty, Geeta Kapur, Anurag Basu
      </Typography>
      <Typography variant="body1" gutterBottom>
        Genre : Dance, Reality Show
      </Typography>
     
      <Typography variant="body2" gutterBottom>
        Language : Hindi
      </Typography>
    </div>
  );
}
