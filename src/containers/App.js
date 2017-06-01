import React, { Component } from 'react';
import Notes from '../components/Notes';
import uuid from 'uuid';
import './App.css';

const notes = [
  {
    id: uuid.v4(),
    task: 'Make Nothambria great again'
  }
];

class App extends Component {
  render() {
    return (
        <div>
          <button onClick={() => console.log('add note')}>+</button>
          <Notes notes={notes}/>
        </div>
    );
  }
}

export default App;
