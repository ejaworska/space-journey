import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  },
  progress: {
    margin: theme.spacing(2),
    color: theme.palette.secondary.light,
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <CircularProgress className={classes.progress} />
    </Box>
  );
}