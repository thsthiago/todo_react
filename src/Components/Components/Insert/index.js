import React, { useState } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '13px 14px',
    backgroundColor: '#333',
    display: 'flex',
    alignItems: 'center',
    width: '90%',
    maxWidth: 550,
    minWidth: 300, 
    position: 'absolute',
    bottom: '-25px'
  },
  input:{
    color: 'white',
    flex: 1
  },
  Fab: {
    width: 35,
    height: 35,
  },
  container: {
    position: 'absolute',
    top: 250,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  item: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#333',
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2)
  },
  color: {
    color: 'white'
  },
  list: {
    width: '90%',
    maxWidth: 450  
  }
}));


function adiciona(event) {
  
  if(!JSON.parse(localStorage.getItem("items"))) localStorage.setItem("items", JSON.stringify([]));

  if(event !== '') {
    let tarefas = JSON.parse(localStorage.getItem("items"));
    tarefas.unshift(event);
    localStorage.setItem("items", JSON.stringify(tarefas))
  }
}

function removerItem(item) {
  let tarefas = JSON.parse(localStorage.getItem("items"));
  let inicial = tarefas.indexOf(item);
  tarefas.splice(inicial, 1);
  localStorage.setItem("items", JSON.stringify(tarefas))
}

function Insert() {
  const storage = JSON.parse(localStorage.getItem("items"));
  const [initial, setText] = useState('');
  const theme = useTheme();
  const [item, setItem] = useState(storage);
  const classes = useStyles();
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };

  const tarefas = item || [];

  return(
    <>
      <Paper className={classes.root}>
        <InputBase 
          placeholder="Adicionar tarefa"
          className={classes.input}
          value={initial}
          onChange={event => setText(event.target.value)}
          onKeyPress={event => {
            if(event.key === 'Enter') {
              adiciona(event.target.value);
              setItem(JSON.parse(localStorage.getItem("items")));
              setText('');
            }
          }}
        />
        <Fab color="secondary" aria-label="add" className={classes.Fab} onClick={event => {
          adiciona(initial)
          setItem(JSON.parse(localStorage.getItem("items")));
          setText('');
        }}>
          <AddIcon />
        </Fab>
      </Paper>

      <Container className={classes.container} maxWidth="lg">
        <List className={classes.list}>
          {
            tarefas.map((item, index) => (
              <ListItem 
                timeout={transitionDuration}
                style={{
                  transitionDelay: `${transitionDuration.exit}ms`,
                }}
                key={index}
                className={classes.item}>
                <ListItemText
                  primary={item}
                  className={classes.color}
                />
                <ListItemSecondaryAction onClick={() => {
                  removerItem(item)
                  setItem(JSON.parse(localStorage.getItem("items")));
                }}>
                  <IconButton aria-label="delete" >
                    <DeleteIcon className={classes.color}/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          }     
        </List>
      </Container>
    </>
  )
}

export default Insert;