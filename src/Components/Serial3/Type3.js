import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Types3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Typography variant="subtitle1" gutterBottom>
        A reality signing show and a stage for young talent to perform and judged.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Cast : Neha Kakkar, Himesh Reshamiya, Anu Malik
      </Typography>
      <Typography variant="body1" gutterBottom>
        Genre : Singing
      </Typography>
     
      <Typography variant="body2" gutterBottom>
        Language : Hindi
      </Typography>
    </div>
  );
}
