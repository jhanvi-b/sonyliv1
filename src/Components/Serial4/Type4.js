import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Types4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Typography variant="subtitle1" gutterBottom>
        A comedy based talk show to entertain live audience with film stars hosted by Kapil sharma.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Cast : Kapil Sharma
      </Typography>
      <Typography variant="body1" gutterBottom>
        Genre : Comedy
      </Typography>
     
      <Typography variant="body2" gutterBottom>
        Language : Hindi
      </Typography>
    </div>
  );
}
