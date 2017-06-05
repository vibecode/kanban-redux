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

  @autobind
  deleteNote(id, e) {
    //avoid bubbling to edit
    e.stopPropagation();

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }

  render() {
    const { notes } = this.state;

    return (
        <div>
          <button onClick={this.addNote}>+</button>
          <Notes notes={notes}
                 onDelete={this.deleteNote}
                 onNoteClick={() => null}
                 onEdit={() => null} />
        </div>
    );
  }
}

export default App;
