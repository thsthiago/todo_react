import React from 'react';
import './style.css';
import Container from '@material-ui/core/Container';
import Todo from './Components/todo';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    width: '100%'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root} disableGutters={true}>
      <Todo />
    </Container>
  );
}

export default App;
