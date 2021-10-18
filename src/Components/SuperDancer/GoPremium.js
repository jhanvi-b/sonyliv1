import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

export default function ContainedButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Button variant="contained" color="primary">
      Go Premium
      </Button>
      
      
      
    </div>
  );
}