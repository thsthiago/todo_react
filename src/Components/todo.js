import React from 'react';
import Insert from './Components/Insert';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url('/images/background.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '102%',
    backgroundPosition: 'bottom',
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  }
}))

function Todo() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Insert />
    </Container>
  )
}

export default Todo;