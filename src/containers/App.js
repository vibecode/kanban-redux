import React, { Component } from 'react';
import Notes from '../components/Notes';
import uuid from 'uuid';
import autobind from 'autobind-decorator';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Make Nothambria great again'
        }
      ]
    }
  }

  @autobind
  addNote() {
    this.setState(
        {
          notes: [
            ...this.state.notes,
            { id: uuid.v4(), task: 'new task' }
          ]
        }
    )
  }

  render() {
    const { notes } = this.state;

    return (
        <div>
          <button onClick={this.addNote}>+</button>
          <Notes notes={notes} />
        </div>
    );
  }
}

export default App;
